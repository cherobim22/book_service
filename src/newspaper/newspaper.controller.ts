import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { NewspaperService } from './newspaper.service';
import { Newspaper } from './interfaces/newspaper.interface';

@Controller('newspaper')
export class NewspaperController {
    constructor(private readonly newspaperService: NewspaperService) {}
  

     @Post()
     async create(@Body() book: Newspaper): Promise<Newspaper> {
        return await this.newspaperService.create(book)  
     }

     
    @Get()
    async get(@Query('title') title: string): Promise<Newspaper> {
        try {
            return await this.newspaperService.get(title);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Newspaper not found');
            }
            throw error;
        }
    }
}
