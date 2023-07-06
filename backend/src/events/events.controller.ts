import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseInterceptors,
    UseGuards,
    UploadedFile, ParseFilePipe, MaxFileSizeValidator, Query
} from '@nestjs/common';
import {EventsService} from './events.service';
import {CreateEventDto} from './dto/create-event.dto';
import {UpdateEventDto} from './dto/update-event.dto';
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {
    deleteFileFromUploads,
    getRandomFileName,
    uploadFile
} from "../helpers/helper";
import {AnnouncementsService} from "../announcements/announcements.service";
import {NotificationsService} from "../notifications/notifications.service";
import {CreateNotificationDto} from "../notifications/dto/create-notification.dto";

@ApiTags('Events')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService, private readonly notificationsService: NotificationsService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async create(@Body() createEventDto: CreateEventDto, @UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({maxSize: 100000000})
            ]
        })
    ) image: Express.Multer.File) {
        //file upload work
        if (image && image.originalname && image.buffer) {
            let file_name = getRandomFileName(image);

            let dir_path = '/uploads/events/';
            let file_path = '.' + dir_path + file_name;
            await uploadFile('.' + dir_path, file_path, image);

            let app_url = process.env.APP_URL + ':' + process.env.PORT;
            createEventDto.image = app_url + dir_path + file_name;
        }

        createEventDto.created_at = Date.now().toString();
        let res = await this.eventsService.create(createEventDto);

        //create notification
        let createNotificationDto = new CreateNotificationDto();
        createNotificationDto.title = 'New Event';
        createNotificationDto.content = createEventDto.title;
        createNotificationDto.created_at = Date.now().toString();
        await this.notificationsService.create(createNotificationDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Event created successfully!',
            data: res.error ? [] : res,
        }
    }

    @Get()
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number, @Query('is_upcoming_event') is_upcoming_event?: string) {
        let res = await this.eventsService.findAll(page, limit, is_upcoming_event);

        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        let res = await this.eventsService.findOne(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }

    @Post(':id')
    @UseInterceptors(FileInterceptor('image'))
    async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto, @UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({maxSize: 100000000})
            ],
            fileIsRequired: false
        })
    ) image?: Express.Multer.File) {
        let event = await this.eventsService.findOne(+id);
        if (event.error) {
            return {
                success: false,
                message: event.error,
                data: [],
            }
        }

        let app_url = process.env.APP_URL + ':' + process.env.PORT;

        //file upload work
        if (image && image.originalname && image.buffer) {
            //delete file
            await deleteFileFromUploads(app_url, event.image);

            let dir_path = '/uploads/events/';
            let file_name = getRandomFileName(image);
            let file_path = '.' + dir_path + file_name;

            await uploadFile('.' + dir_path, file_path, image);

            updateEventDto.image = app_url + dir_path + file_name;
        }

        if (!Object.keys(updateEventDto).length) {
            return {
                success: true,
                message: 'Event updated successfully.',
                data: [],
            };
        } else {
            let res = await this.eventsService.update(+id, updateEventDto);

            return {
                success: !res.error,
                message: res.error ? res.error : 'Event updated successfully!',
                data: res.error ? [] : res,
            }
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        let event = await this.eventsService.findOne(+id);
        console.log("delete id", id, event)
        if (event.error) {
            return {
                success: false,
                message: event.error,
                data: [],
            }
        }

        //delete uploaded file
        let app_url = process.env.APP_URL + ':' + process.env.PORT;
        await deleteFileFromUploads(app_url, event.image);

        let res = await this.eventsService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Event deleted successfully!',
            data: res.error ? [] : res,
        }
    }
}
