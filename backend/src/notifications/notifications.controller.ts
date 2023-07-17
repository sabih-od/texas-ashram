import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Request} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {AuthService} from "../auth/auth.service";
import {In} from "typeorm";

@ApiTags('Notifications')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService, private readonly authService: AuthService) {}

  // @Post()
  // async create(@Body() createNotificationDto: CreateNotificationDto) {
  //     let res = await this.notificationsService.create(createNotificationDto);
  //
  //     return {
  //         success: !res.error,
  //         message: res.error ? res.error : 'Notification created successfully!',
  //         data: res.error ? [] : res,
  //     }
  // }

  @Get()
  async findAll(@Request() req, @Query('page') page?: number, @Query('limit') limit?: number) {
      let user = await this.authService.getUserByEmail(req.user.email);

      let res = await this.notificationsService.findAll(page, limit, {
          order: {
              created_at: 'DESC'
          },
          where: {
              user_id: In([0, user.id])
          }
      });

      return {
          success: true,
          message: '',
          ...res
      }
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //     let res = await this.notificationsService.findOne(+id);
  //
  //     return {
  //         success: !res.error,
  //         message: res.error ? res.error : '',
  //         data: res.error ? [] : res,
  //     }
  // }
  //
  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
  //     let notification = await this.notificationsService.findOne(+id);
  //     if (notification.error) {
  //         return {
  //             success: false,
  //             message: notification.error,
  //             data: [],
  //         }
  //     }
  //
  //     let res = await this.notificationsService.update(+id, updateNotificationDto);
  //
  //     return {
  //         success: !res.error,
  //         message: res.error ? res.error : 'Notification updated successfully!',
  //         data: res.error ? [] : res,
  //     }
  // }
  //
  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //     let notification = await this.notificationsService.findOne(+id);
  //     if (notification.error) {
  //         return {
  //             success: false,
  //             message: notification.error,
  //             data: [],
  //         }
  //     }
  //
  //     let res = await this.notificationsService.remove(+id);
  //
  //     return {
  //         success: !res.error,
  //         message: res.error ? res.error : 'Notification deleted successfully!',
  //         data: res.error ? [] : res,
  //     }
  // }
}
