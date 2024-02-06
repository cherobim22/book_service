import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import {Book} from './interfaces/books.interface'
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(BookEntity) private bookRepository:Repository<BookEntity>){}


    async create(book: Book): Promise<BookEntity> {
       return await this.bookRepository.save(book)  
    }

    async get(): Promise<BookEntity[]> {
        return await this.bookRepository.find();
    }
}
