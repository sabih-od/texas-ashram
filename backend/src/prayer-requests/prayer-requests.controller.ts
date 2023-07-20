import {Controller, Get, Post, Body, Param, Delete, UseGuards, Query, Request} from '@nestjs/common';
import {PrayerRequestsService} from './prayer-requests.service';
import {CreatePrayerRequestDto} from './dto/create-prayer-request.dto';
import {UpdatePrayerRequestDto} from './dto/update-prayer-request.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {AuthService} from "../auth/auth.service";
import {CreateNotificationDto} from "../notifications/dto/create-notification.dto";
import {AnnouncementsService} from "../announcements/announcements.service";
import {NotificationsService} from "../notifications/notifications.service";
import {FirebaseService} from "../firebase/firebase.service";
import {MailService} from "../mail/mail.service";

@ApiTags('Prayer Requests')
@Controller('prayer-requests')
export class PrayerRequestsController {
    constructor(
        private readonly prayerRequestsService: PrayerRequestsService,
        private readonly authService: AuthService,
        private readonly notificationsService: NotificationsService
    ) {
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() createPrayerRequestDto: CreatePrayerRequestDto, @Request() req) {
        let user = await this.authService.getUserByEmail(req.user.email);
        createPrayerRequestDto.user_id = user.id;

        createPrayerRequestDto.created_at = Date.now().toString();
        let res = await this.prayerRequestsService.create(createPrayerRequestDto);

        //create notification
        let createNotificationDto = new CreateNotificationDto();
        createNotificationDto.title = 'Prayer Request for ' + createPrayerRequestDto.name;
        createNotificationDto.content = createPrayerRequestDto.description;
        createNotificationDto.topic = 'prayer-request';
        createNotificationDto.topic_id = res.id;
        createNotificationDto.icon = user.profile_picture ?? process.env.APP_URL + ':' + process.env.PORT + "/images/logo.png";
        createNotificationDto.created_at = Date.now().toString();
        let notification = await this.notificationsService.create(createNotificationDto);

        //send notification
        let firebaseService = new FirebaseService();
        await firebaseService.sendNotification({
            notification: {
                title: 'Prayer Request for ' + createPrayerRequestDto.name,
                body: createPrayerRequestDto.description
            }
        });

        //send mail to prayerrequests@texaschristianashram.org
        let mailService = new MailService();
        let string = "name: " + createPrayerRequestDto.name + " \n email: " + createPrayerRequestDto.email + " \n contact: " + createPrayerRequestDto.contact + "" +
            " \n time: " + createPrayerRequestDto.time + " \n" + "description: " + createPrayerRequestDto.description + "";
        await mailService.sendEmail('prayerrequests@texaschristianashram.org', 'Prayer Request', string);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Prayer Request created successfully!',
            data: res.error ? [] : res,
        }
    }

    @Get()
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.prayerRequestsService.findAll(page, limit);

        return {
            success: true,
            message: '',
            ...res
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: string) {
        let res = await this.prayerRequestsService.findOne(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get('get-by-user-id/:user_id')
    async findOneByUserId(@Param('user_id') user_id: number) {
        let res = await this.prayerRequestsService.findOneByUserId(user_id);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Post(':id')
    async update(@Param('id') id: string, @Body() updatePrayerRequestDto: UpdatePrayerRequestDto) {
        let prayer_request = await this.prayerRequestsService.findOne(+id);
        if (prayer_request.error) {
            return {
                success: false,
                message: prayer_request.error,
                data: [],
            }
        }

        let res = await this.prayerRequestsService.update(+id, updatePrayerRequestDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Prayer Request updated successfully!',
            data: res.error ? [] : res,
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        let user = await this.prayerRequestsService.findOne(+id);
        if (user.error) {
            return {
                success: false,
                message: user.error,
                data: [],
            }
        }

        let res = await this.prayerRequestsService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Prayer Request deleted successfully!',
            data: res.error ? [] : res,
        }
    }
}
