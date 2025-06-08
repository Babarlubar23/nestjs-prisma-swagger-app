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

  log(message: string | object, context?: string) {
    const msg = typeof message === 'object' ? JSON.stringify(message) : message;
    this.logger.info({ context: context || this.context }, msg);
  }

  error(message: string | object, trace?: string, context?: string) {
    const msg = typeof message === 'object' ? JSON.stringify(message) : message;
    this.logger.error({ context: context || this.context, trace }, msg);
  }

  warn(message: string | object, context?: string) {
    const msg = typeof message === 'object' ? JSON.stringify(message) : message;
    this.logger.warn({ context: context || this.context }, msg);
  }

  debug?(message: string | object, context?: string) {
    const msg = typeof message === 'object' ? JSON.stringify(message) : message;
    this.logger.debug({ context: context || this.context }, msg);
  }

  verbose?(message: string | object, context?: string) {
    const msg = typeof message === 'object' ? JSON.stringify(message) : message;
    this.logger.info({ context: context || this.context }, msg);
  }

  withContext(context: string): CommonLoggerService {
    const logger = new CommonLoggerService();
    logger.setContext(context);
    return logger;
  }
}
