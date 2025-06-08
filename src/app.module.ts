import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './cache/cache.module';
import { OwnersModule } from './owners/owners.module';
import { PetsModule } from './pets/pets.module';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { LoggerModule } from './common/logging/logger.module';

@Module({
  imports: [
    PrismaModule,
    CacheModule,
    AuthModule,
    OwnersModule,
    PetsModule,
    LoggerModule,
    AutomapperModule.forRoot({ strategyInitializer: classes() }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule {}
