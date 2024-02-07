import { Module } from '@nestjs/common';
import { NewspaperService } from './newspaper.service';
import { NewspaperController } from './newspaper.controller';
import { CacheModule } from '@nestjs/cache-manager';
import type { ClientOpts } from 'redis';


@Module({
  imports:[CacheModule.register<ClientOpts>({ 

    host: 'localhost',
    port: 6379 })],
  providers: [NewspaperService],
  controllers: [NewspaperController]
})
export class NewspaperModule {}
