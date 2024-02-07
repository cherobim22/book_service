import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {Newspaper} from './interfaces/newspaper.interface'

@Injectable()
export class NewspaperService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async create(newspaper: Newspaper): Promise<Newspaper> {
         await this.cacheManager.set(newspaper.title, newspaper, 0); 
         return newspaper
     }
 
     async get(title:string): Promise<Newspaper> {
        const newspaper:Newspaper = await this.cacheManager.get(title);
        if (!newspaper) {
            throw new NotFoundException('Newspaper not found');
        }
        return newspaper;
     }
}
