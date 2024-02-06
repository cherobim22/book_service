import { Body, Controller, Get, Post } from '@nestjs/common';
import {Book} from './interfaces/books.interface'
import { BooksService } from './books.service';
import { BookEntity } from './entity/book.entity';


@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    async create(@Body() book: Book): Promise<BookEntity> {
    

        return await this.booksService.create(book);
    }

    @Get()
    async get(): Promise<BookEntity[]> {
      return await this.booksService.get();
    }
}
