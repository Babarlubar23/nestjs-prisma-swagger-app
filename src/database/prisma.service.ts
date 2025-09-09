import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '../../generated/client';
import { CloudAuthService } from '../cloud-auth/cloud-auth.service';

@Injectable()
export class PrismaService implements OnModuleInit {
  public prisma: PrismaClient;

  constructor(private readonly cloudAuthService: CloudAuthService) {}

  async onModuleInit() {
    // Example values, replace with your actual config or env variables
    const serverName = process.env.POSTGRES_SERVER || 'myserver';
    const dbName = process.env.POSTGRES_DB || 'mydatabase';
    const aadUsername = process.env.POSTGRES_AAD_USER || 'user@yourtenant.onmicrosoft.com@myserver';
    const url = `${serverName}.postgres.database.azure.com`;

    // Get access token from CloudAuthService
    const info = await this.cloudAuthService.getConnectionInfo(url, 'postgres');

    // Construct connection string with access token as password
    const connectionString = `postgresql://${aadUsername}:${info.accessToken}@${serverName}.postgres.database.azure.com:5432/${dbName}?sslmode=require`;

    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: connectionString,
        },
      },
    });

    await this.prisma.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    (this.prisma as unknown as { $on(event: string, cb: () => Promise<void>): void }).$on(
      'beforeExit',
      async () => {
        await app.close();
      },
    );
  }
}
