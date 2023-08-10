import {Controller, Get, Post, Body, Param, Delete, UseGuards, Query, Req} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {GroupsService} from "../groups/groups.service";
import {UpdateGroupDto} from "../groups/dto/update-group.dto";
import {socketIoServer} from "../main";
import {UsersService} from "../users/users.service";
import {NotificationsService} from "../notifications/notifications.service";
import {FirebaseService} from "../firebase/firebase.service";
import {IsNull} from "typeorm";

@ApiTags('Messages')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('messages')
export class MessagesController {
  constructor(
      private readonly messagesService: MessagesService,
      private readonly groupService: GroupsService,
      private readonly notificationsService: NotificationsService,
      private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Req() req, @Body() createMessageDto: CreateMessageDto) {
      let group = await this.groupService.findOne(createMessageDto.group_id);
      if (group.error) {
          return {
              success: false,
              message: 'Group not found',
              data: []
          };
      }

      let user_exists_check = await this.usersService.findOne(createMessageDto.user_id);
      if (user_exists_check.error) {
          return {
              success: false,
              message: 'User does not exist. (Invalid user_id)',
              data: []
          };
      }

      const members_array = JSON.parse(group.members);
      let user = await this.usersService.findOneByEmail(req.user.email);
      if (!members_array || !members_array.includes(user.id)) {
          return {
              success: false,
              message: 'User not in group',
              data: []
          };
      }

      let updateGroupDto = new UpdateGroupDto();
      updateGroupDto.last_message = createMessageDto.message;
      updateGroupDto.last_updated = Date.now().toString();

      await this.groupService.update(group.id, updateGroupDto);

      createMessageDto.created_at = Date.now().toString();
      let res = await this.messagesService.create(createMessageDto);

      //emit notification
      socketIoServer.emit('new-message-' + createMessageDto.group_id, {
          ...res
      });

      //emit for group (for app dev)
      socketIoServer.emit('group-message', {
          ...res
      });

      //emit firebase notification
      // let group_members = JSON.parse(group.members);
      // if (group_members && group_members.length > 0) {
          // for (const user_id of group_members) {
          //     let createNotificationDto = new CreateNotificationDto();
          //     createNotificationDto.user_id = user_id;
          //     createNotificationDto.title = 'New Message';
          //     createNotificationDto.content = createMessageDto.message;
          //     createNotificationDto.topic = 'message';
          //     createNotificationDto.topic_id = group.id;
          //     createNotificationDto.icon = process.env.APP_URL + ':' + process.env.PORT + "/images/logo.png";
          //     createNotificationDto.created_at = Date.now().toString();
          //     let notification = await this.notificationsService.create(createNotificationDto);
          // }
      // }

      //send notification
      let fcm_tokens = await this.getFcmTokensOfGroupMembers(createMessageDto.group_id, createMessageDto.user_id);
      console.log('fcm_tokens', fcm_tokens);
      let firebaseService = new FirebaseService();
      if (fcm_tokens != null && fcm_tokens.length > 0) {
          let resp = await firebaseService.sendMulticastNotification(fcm_tokens, {
              notification: {
                  title: 'New Message',
                  body: createMessageDto.message
              },
              data: {
                  title: 'New Message',
                  body: createMessageDto.message,
                  group_id: (createMessageDto.group_id).toString()
              },
          });

          console.log('fcm multicast message', resp);
      }

      return {
          success: !res.error,
          message: res.error ? res.error : 'Message created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.messagesService.findAll(page, limit, {where: {blocked_at: IsNull()}});

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.messagesService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
      let message = await this.messagesService.findOne(+id);
      if (message.error) {
          return {
              success: false,
              message: message.error,
              data: [],
          }
      }

      let res = await this.messagesService.update(+id, updateMessageDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Message updated successfully!',
          data: res.error ? [] : res,
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let message = await this.messagesService.findOne(+id);
      if (message.error) {
          return {
              success: false,
              message: message.error,
              data: [],
          }
      }

      //emit notification
      socketIoServer.emit('deleted-message-' + message.group_id, {
          ...message
      });

      let res = await this.messagesService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Message deleted successfully!',
          data: res.error ? [] : res,
      }
  }

  async getFcmTokensOfGroupMembers (group_id: number, user_id: number) {
      let group = await this.groupService.findOne(+group_id);
      if (group.error) {
          return [];
      }

      let sender = await this.usersService.findOne(user_id);
      if (sender.error) {
          return [];
      }

      let group_members = group.members == null ? [] : JSON.parse(group.members);
      let users_blocked_by_sender = sender.blocked_users == null ? [] : JSON.parse(sender.blocked_users);
      let users_who_have_blocked_sender = [];

      for (const group_member of group_members) {
          let user = await this.usersService.findOne(group_member);
          if (user.error) {
              continue;
          }

          let blocked_users = user.blocked_users == null ? [] : JSON.parse(user.blocked_users);
              users_who_heve_blocked_sender.push(user.id);
          }
      }

      group_members = group_members.filter((group_member) => {
          return !users_blocked_by_sender.includes(group_member) && !users_who_heve_blocked_sender.includes(group_member);
      });

      let fcm_tokens = [];
      for (const group_member of group_members) {
          let user = await this.usersService.findOne(+group_member);
          if (user.error || user.fcm_token == null) {
              continue;
          }

          fcm_tokens.push(user.fcm_token);
      }

      return fcm_tokens;
  }
}
