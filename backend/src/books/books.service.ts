import {Inject, Injectable} from '@nestjs/common';
import {CreateBookDto} from './dto/create-book.dto';
import {UpdateBookDto} from './dto/update-book.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Book} from "./entities/book.entity";

@Injectable()
export class BooksService {
    constructor(
        @Inject('BOOK_REPOSITORY')
        private bookRepository: Repository<Book>,
    ) {
    }

    async create(createBookDto: CreateBookDto): Promise<any> {
        try {
            const book = await this.bookRepository.create({
                title: createBookDto.title,
                file: createBookDto.file,
                image: createBookDto.image,
            });

            await this.bookRepository.save(book);

            return await this.findOne(book.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        const [data, total] = await this.bookRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            ...query_object
        });

        const totalPages = Math.ceil(total / limit);

        return {
            data,
            total,
            currentPage: page,
            totalPages,
        };
    }

    async findOne(id: number): Promise<any> {
        try {
            return await this.bookRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Books Not Found'
                };
            }
        }
    }

    async update(id: number, updateBookDto: UpdateBookDto): Promise<any> {
        try {
            const event = await this.findOne(id);

            if (event.error) {
                return event;
            }

            await this.bookRepository.update(event, updateBookDto);

            return await this.findOne(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async remove(id: number) {
        const book = await this.findOne(id);

        if (book.error) {
            return book;
        }

        return await this.bookRepository.delete(book);
    }
}
