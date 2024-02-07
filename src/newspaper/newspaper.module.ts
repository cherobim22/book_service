import { Module } from '@nestjs/common';
import { NewspaperService } from './newspaper.service';
import { NewspaperController } from './newspaper.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports:[CacheModule.register()],
  providers: [NewspaperService],
  controllers: [NewspaperController]
})
export class NewspaperModule {}
