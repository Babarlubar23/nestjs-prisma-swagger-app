import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Custom decorator to extract user from request
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
