import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseInterceptors,
    Query, UseGuards, UploadedFiles
} from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import {
    deleteFileFromUploads,
    generateRandomString,
    getFileExtension,
    getRandomFileName,
    uploadFile
} from "../helpers/helper";
import { promises as fsPromises } from "fs";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../auth/auth.guard";
import { Injectable,NestInterceptor, ExecutionContext, BadRequestException, ParseIntPipe, CallHandler} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AnnouncementsService} from "../announcements/announcements.service";
import {NotificationsService} from "../notifications/notifications.service";
import {CreateNotificationDto} from "../notifications/dto/create-notification.dto";
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
    constructor(private readonly booksService: BooksService, private readonly notificationsService: NotificationsService) {}

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
            let app_url = process.env.APP_URL + ':' + process.env.PORT;

            // File upload work
            if (files.file && files.file[0] && files.file[0].originalname && files.file[0].buffer) {
                let file_name = getRandomFileName(files.file[0]);

                let dir_path = '/uploads/books/';
                let file_path = '.' + dir_path + file_name;
                await uploadFile('.' + dir_path, file_path, files.file[0]);

                createBookDto.file = app_url + dir_path + file_name;
            }

            // Image upload work
            if (files.image && files.image[0] && files.image[0].originalname && files.image[0].buffer) {
                let file_name = getRandomFileName(files.image[0]);

                let dir_path = '/uploads/books/';
                let file_path = '.' + dir_path + file_name;
                await uploadFile('.' + dir_path, file_path, files.image[0]);

                createBookDto.image = app_url + dir_path + file_name;
            }

            createBookDto.created_at = Date.now().toString();
            const res = await this.booksService.create(createBookDto);

            //create notification
            let createNotificationDto = new CreateNotificationDto();
            createNotificationDto.title = 'New Book Upload';
            createNotificationDto.content = createBookDto.title;
            createNotificationDto.created_at = Date.now().toString();
            await this.notificationsService.create(createNotificationDto);

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
            ...res
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

    @Post(':id')
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

            let app_url = process.env.APP_URL + ':' + process.env.PORT;

            // File upload work
            if (files.file[0] && files.file[0].originalname && files.file[0].buffer) {
                // Delete existing file
                await deleteFileFromUploads(app_url, book.file);

                let dir_path = '/uploads/books/';
                let file_name = getRandomFileName(files.file[0]);
                let file_path = '.' + dir_path + file_name;

                await uploadFile('.' + dir_path, file_path, files.file[0]);
            }

            // Image upload work
            if (files.image[0] && files.image[0].originalname && files.image[0].buffer) {
                // Delete existing image
                await deleteFileFromUploads(app_url, book.image);

                let dir_path = '/uploads/books/';
                let file_name = getRandomFileName(files.image[0]);
                let file_path = '.' + dir_path + file_name;

                await uploadFile('.' + dir_path, file_path, files.image[0]);
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
        let book = await this.booksService.findOne(+id);
        if (book.error) {
            return {
                success: false,
                message: book.error,
                data: [],
            };
        }

        // Delete uploaded file
        let app_url = process.env.APP_URL + ':' + process.env.PORT;
        await deleteFileFromUploads(app_url, book.file);
        await deleteFileFromUploads(app_url, book.image);

        let res = await this.booksService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Book deleted successfully!',
            data: res.error ? [] : res,
        };
    }
}
