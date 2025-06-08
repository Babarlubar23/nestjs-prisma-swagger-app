import { Module, Global } from '@nestjs/common';
import { CommonLoggerService } from './logger.service';

@Global()
@Module({
  providers: [
    {
      provide: CommonLoggerService,
      useFactory: () => new CommonLoggerService({
        transport: {
          target: 'pino-pretty',
          options: { colorize: true, translateTime: 'SYS:standard' },
        },
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      }),
    },
  ],
  exports: [CommonLoggerService],
})
export class LoggerModule {}
