import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get, Injectable } from '@nestjs/common';
import { CommonLoggerService } from './common/logging/logger.service';

@Injectable()
class TestService {
  getMsg() {
    return 'ok';
  }
}
@Controller()
class TestController {
  constructor(
    private readonly testService: TestService,
    private readonly logger: CommonLoggerService,
  ) {
    this.logger
      .withContext('TestController')
      .log('TestController constructed, testService:', 'TestController');
  }
  @Get() get() {
    return this.testService.getMsg();
  }
}
@Module({
  controllers: [TestController],
  providers: [TestService],
})
class TestModule {}

async function bootstrap() {
  const app = await NestFactory.create(TestModule);
  await app.listen(4000);
}
bootstrap();
