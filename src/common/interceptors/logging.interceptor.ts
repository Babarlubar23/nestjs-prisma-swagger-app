import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { CommonLoggerService } from '../logging/logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: CommonLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest();
    const user = req.user ? `User: ${req.user.sub || req.user.id || 'unknown'}` : 'Unauthenticated';
    const method = req.method;
    const url = req.url;
    const now = Date.now();
    this.logger
      .withContext('LoggingInterceptor')
      .log(`Incoming Request: ${method} ${url} (${user})`);
    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger
            .withContext('LoggingInterceptor')
            .log(`Outgoing Response: ${method} ${url} (${user}) - ${Date.now() - now}ms`),
        ),
      );
  }
}
