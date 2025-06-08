import { execSync } from 'child_process';
import { CommonLoggerService } from '../common/logging/logger.service';

/**
 * This script runs `prisma generate` to create the Prisma Client based on your schema.prisma file.
 * Run it with: npx ts-node prisma/generate-client.ts
 */

export class PrismaGenerateClient {
  constructor(private readonly logger: CommonLoggerService) {}

  async run() {
    try {
      execSync('npx prisma generate', { stdio: 'inherit' });
      this.logger.withContext('PrismaGenerateClient').log('Prisma Client generated successfully.');
    } catch (error) {
      this.logger.withContext('PrismaGenerateClient').error('Failed to generate Prisma Client:', error);
      process.exit(1);
    }
  }
}

// To run the script standalone
if (require.main === module) {
  const logger = new CommonLoggerService();
  new PrismaGenerateClient(logger).run();
}
