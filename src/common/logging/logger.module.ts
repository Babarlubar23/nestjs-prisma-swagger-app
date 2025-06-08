import { Module, Global } from '@nestjs/common';
import { CommonLoggerService } from './logger.service';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    ConfigService,
    {
      provide: CommonLoggerService,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        new CommonLoggerService({
          transport: {
            target: 'pino-pretty',
            options: { colorize: true, translateTime: 'SYS:standard' },
          },
          level: configService.get('NODE_ENV') === 'production' ? 'info' : 'debug',
        }),
    },
  ],
  exports: [CommonLoggerService],
})
export class LoggerModule {}
