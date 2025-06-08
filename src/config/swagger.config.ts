import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function configureSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('NestJS Golden Path Pets API')
    .setDescription('API documentation for the NestJS Golden Path Pets application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
