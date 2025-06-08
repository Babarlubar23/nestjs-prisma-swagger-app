import { Injectable } from '@nestjs/common';
import { CommonLoggerService } from './common/logging/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: CommonLoggerService) {
    this.logger.withContext('AppService').log('AppService constructed');
  }

  getHeadline(): string {
    try {
      this.logger.withContext('AppService').log('Fetching headline');
      return 'Welcome to the NestJS Prisma Swagger App!';
    } catch (err) {
      // Fallback for logger issues
      console.error('Error in getHeadline', { context: AppService.name, err });
      return `Error: ${err instanceof Error ? err.message : String(err)}`;
    }
  }
}
