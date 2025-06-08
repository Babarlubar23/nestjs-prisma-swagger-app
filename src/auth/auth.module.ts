import { Module } from '@nestjs/common';
import { AzureAdGuard } from './azure-ad.guard';

@Module({
  providers: [AzureAdGuard],
  exports: [AzureAdGuard],
})
export class AuthModule {}
