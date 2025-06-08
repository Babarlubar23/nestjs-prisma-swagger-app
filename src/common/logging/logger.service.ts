import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import { Logger, LoggerOptions } from 'pino';
import pino from 'pino';

export interface CommonLoggerOptions extends LoggerOptions {
  context?: string;
}

@Injectable()
export class CommonLoggerService implements NestLoggerService {
  private readonly logger: Logger;
  private context = '';

  constructor(options?: CommonLoggerOptions) {
    this.logger = pino(options);
    if (options?.context) {
      this.context = options.context;
    }
  }

  setContext(context: string) {
    this.context = context;
  }

  log(message: any, context?: string) {
    this.logger.info({ context: context || this.context }, message);
  }

  error(message: any, trace?: string, context?: string) {
    this.logger.error({ context: context || this.context, trace }, message);
  }

  warn(message: any, context?: string) {
    this.logger.warn({ context: context || this.context }, message);
  }

  debug?(message: any, context?: string) {
    this.logger.debug({ context: context || this.context }, message);
  }

  verbose?(message: any, context?: string) {
    this.logger.info({ context: context || this.context }, message);
  }

  withContext(context: string): CommonLoggerService {
    const logger = new CommonLoggerService();
    logger.setContext(context);
    return logger;
  }
}
