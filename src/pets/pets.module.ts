import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PrismaModule } from '../database/prisma.module';
import { CacheModule } from '../cache/cache.module';
import { AutomapperModule } from '@automapper/nestjs';

@Module({
  imports: [PrismaModule, CacheModule, AutomapperModule],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
