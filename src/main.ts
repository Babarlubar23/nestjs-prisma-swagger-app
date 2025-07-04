import { config } from 'dotenv';
import { existsSync } from 'fs';

if (existsSync(process.cwd() + '/.env.local')) {
  config({ path: process.cwd() + '/.env.local' });
} else {
  config({ path: process.cwd() + '/.env' });
}

import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { configureSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  configureSwagger(app);
  await app.listen(3000);
}
bootstrap();
