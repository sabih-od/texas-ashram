import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    UploadedFile,
    ParseFilePipe, Query, UseGuards, UploadedFiles
} from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { generateRandomString, getFileExtension } from "../helpers/helper";
import { promises as fsPromises } from "fs";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../auth/auth.guard";
import { Injectable,NestInterceptor, ExecutionContext, BadRequestException, ParseIntPipe, CallHandler} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const MAX_FILE_SIZE = 100000000;

@Injectable()
export class MaxFileSizeInterceptor implements NestInterceptor {
    constructor(private readonly maxSize: number) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const files = request.files;

        if (files && files.file && files.file[0] && files.file[0].size > this.maxSize) {
            throw new BadRequestException(`File size exceeds the limit of ${this.maxSize} bytes`);
        }

        if (files && files.image && files.image[0] && files.image[0].size > this.maxSize) {
            throw new BadRequestException(`Image size exceeds the limit of ${this.maxSize} bytes`);
        }

        return next.handle().pipe(
            map((data) => {
                return data;
            }),
        );
    }
}

@ApiTags('Books')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'file', maxCount: 1 },
            { name: 'image', maxCount: 1 },
        ]),
        new MaxFileSizeInterceptor(MAX_FILE_SIZE), // Use the MaxFileSizeInterceptor
    )
    async create(
        @Body() createBookDto: CreateBookDto,
        @UploadedFiles() files: { image: Express.Multer.File[], file?: Express.Multer.File[] },
    ) {
        try {
            // File upload work
            if (files.file && files.file[0] && files.file[0].originalname && files.file[0].buffer) {
                const randomString = generateRandomString(20);
                const fileExtension = getFileExtension(files.file[0].originalname);
                const fileName = `${randomString}.${fileExtension}`;
                const dirPath = '/uploads/books';
                const filePath = `.${dirPath}/${fileName}`;

                await fsPromises.mkdir(`.${dirPath}`, { recursive: true });
                await fsPromises.writeFile(filePath, files.file[0].buffer);
                createBookDto.file = `${dirPath}/${fileName}`;
            }

            // Image upload work
            if (files.image && files.image[0] && files.image[0].originalname && files.image[0].buffer) {
                const randomString = generateRandomString(20);
                const fileExtension = getFileExtension(files.image[0].originalname);
                const fileName = `${randomString}.${fileExtension}`;
                const dirPath = '/uploads/books';
                const filePath = `.${dirPath}/${fileName}`;

                await fsPromises.mkdir(`.${dirPath}`, { recursive: true });
                await fsPromises.writeFile(filePath, files.image[0].buffer);
                createBookDto.image = `${dirPath}/${fileName}`;
            }

            const res = await this.booksService.create(createBookDto);

            return {
                success: !res.error,
                message: res.error ? res.error : 'Books created successfully!',
                data: res.error ? [] : res,
            };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }



    @Get()
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.booksService.findAll(page, limit);

        return {
            success: true,
            message: '',
            res
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        let res = await this.booksService.findOne(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }

    @Patch(':id')
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'file', maxCount: 1 },
            { name: 'image', maxCount: 1 },
        ]),
        new MaxFileSizeInterceptor(MAX_FILE_SIZE),
    )
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateBookDto: UpdateBookDto,

        @UploadedFiles() files: { image: Express.Multer.File[], file?: Express.Multer.File[] },
    ) {
        try {
            const book = await this.booksService.findOne(id);
            if (book.error) {
                return {
                    success: false,
                    message: book.error,
                    data: [],
                };
            }

            // File upload work
            if (files.file[0] && files.file[0].originalname && files.file[0].buffer) {
                // Delete existing file
                const deletePath = '.' + book.file;
                await fsPromises.unlink(deletePath);

                const dirPath = '/uploads/books';
                const filePath = '.' + dirPath + files.file[0].originalname;

                await fsPromises.mkdir('.' + dirPath, {recursive: true});
                await fsPromises.writeFile(filePath, files.file[0].buffer);
            }

            // Image upload work
            if (files.image[0] && files.image[0].originalname && files.image[0].buffer) {
                // Delete existing image
                const deletePath = '.' + book.image;
                await fsPromises.unlink(deletePath);

                const dirPath = '/uploads/books';
                const filePath = '.' + dirPath + files.image[0].originalname;

                await fsPromises.mkdir('.' + dirPath, {recursive: true});
                await fsPromises.writeFile(filePath, files.image[0].buffer);
            }

            if (!Object.keys(updateBookDto).length) {
                return {
                    success: true,
                    message: 'Book updated successfully.',
                    data: [],
                };
            } else {
                const res = await this.booksService.update(id, updateBookDto);

                return {
                    success: !res.error,
                    message: res.error ? res.error : 'Book updated successfully!',
                    data: res.error ? [] : res,
                };
            }
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        let books = await this.booksService.findOne(+id);
        if (books.error) {
            return {
                success: false,
                message: books.error,
                data: [],
            };
        }

        // Delete uploaded file
        let deletePath = '.' + books.media;
        try {
            await fsPromises.access(deletePath);
            await fsPromises.unlink(deletePath);
        } catch (error) {
            // Handle file deletion error if necessary
        }

        let res = await this.booksService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Books deleted successfully!',
            data: res.error ? [] : res,
        };
    }
}
