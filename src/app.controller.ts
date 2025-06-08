import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './common/decorators/user.decorator';
import { ApiTags, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { CommonLoggerService } from './common/logging/logger.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: CommonLoggerService,
  ) {}

  @Get()
  @ApiOkResponse({ description: 'API headline', type: String })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getHeadline(): string {
    this.logger
      .withContext(AppController.name)
      .log('AppController: getHeadline called', AppController.name);
    return this.appService.getHeadline();
  }

  @Get('me')
  @ApiOkResponse({ description: 'Current user information' })
  getMe(@User() user: Record<string, unknown>) {
    this.logger
      .withContext(AppController.name)
      .log('AppController: getMe called', AppController.name);
    return { message: 'This is the current user', user };
  }
}
