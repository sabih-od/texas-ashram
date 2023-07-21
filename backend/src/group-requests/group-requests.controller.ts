import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Inject} from '@nestjs/common';
import { GroupRequestsService } from './group-requests.service';
import { CreateGroupRequestDto } from './dto/create-group-request.dto';
import { UpdateGroupRequestDto } from './dto/update-group-request.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {AcceptGroupRequestDto} from "./dto/accept-group-request.dto";
import {GroupsService} from "../groups/groups.service";
import {UsersService} from "../users/users.service";
import {Repository} from "typeorm";
import {Group} from "../groups/entities/group.entity";
import {GroupRequest} from "./entities/group-request.entity";
import {FirebaseService} from "../firebase/firebase.service";
import {CreateNotificationDto} from "../notifications/dto/create-notification.dto";
import {NotificationsService} from "../notifications/notifications.service";

@ApiTags('Group Requests')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('group-requests')
export class GroupRequestsController {
  constructor(
      private readonly groupRequestsService: GroupRequestsService,
      private readonly groupsService: GroupsService,
      private readonly usersService: UsersService,
      private readonly notificationsService: NotificationsService,
      @Inject('GROUP_REPOSITORY')
      private groupRepository: Repository<Group>,
      @Inject('GROUP_REQUEST_REPOSITORY')
      private groupRequestRepository: Repository<GroupRequest>,
  ) {}

  @Post()
  async create(@Body() createGroupRequestDto: CreateGroupRequestDto) {
      let redundancy_check = await this.groupRequestRepository.findOne({
          where: {
              user_id: createGroupRequestDto.user_id,
              group_id: createGroupRequestDto.group_id,
          },
      });

      if (redundancy_check) {
          return {
              success: false,
              message: 'You have already sent request. Please wait for approval.',
              data: []
          }
      }

      let user = await this.usersService.findOne(+createGroupRequestDto.user_id);
      if (user.error){
          return {
              success: false,
              message: user.error,
              data: [],
          }
      }

      let group = await this.groupsService.findOne(+createGroupRequestDto.group_id);
      if (group.error){
          return {
              success: false,
              message: group.error,
              data: [],
          }
      }

      createGroupRequestDto.created_at = Date.now().toString();
      let res = await this.groupRequestsService.create(createGroupRequestDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Group Request created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.groupRequestsService.findAll(page, limit);

      res.data = await Promise.all(
          res.data.map(async (group_request) => {
              let group = await this.groupsService.findOne(group_request.group_id);

              if (group.error) {
                  group = null;
              }

              let user = await this.usersService.findOne(group_request.user_id);

              if (user.error) {
                  user = null;
              }

              return {
                  ...group_request,
                  group,
                  user
              }
          })
      );

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.groupRequestsService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGroupRequestDto: UpdateGroupRequestDto) {
      let group_request = await this.groupRequestsService.findOne(+id);
      if (group_request.error) {
          return {
              success: false,
              message: group_request.error,
              data: [],
          }
      }

      let res = await this.groupRequestsService.update(+id, updateGroupRequestDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Group Request updated successfully!',
          data: res.error ? [] : res,
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let group_request = await this.groupRequestsService.findOne(+id);
      if (group_request.error) {
          return {
              success: false,
              message: group_request.error,
              data: [],
          }
      }

      let res = await this.groupRequestsService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Group Request deleted successfully!',
          data: res.error ? [] : res,
      }
  }

  @Post('accept')
  async accept(@Body() acceptGroupRequestDto: AcceptGroupRequestDto) {
      let group_request = await this.groupRequestsService.findOne(+acceptGroupRequestDto.id);
      if (group_request.error) {
          return {
              success: false,
              message: group_request.error,
              data: [],
          }
      }

      let group = await this.groupsService.findOne(+group_request.group_id);
      if (group.error) {
          await this.groupRequestsService.remove(+acceptGroupRequestDto.id)
          return {
              success: false,
              message: group.error,
              data: [],
          }
      }

      let user = await this.usersService.findOne(+group_request.user_id);
      if (user.error) {
          await this.groupRequestsService.remove(+acceptGroupRequestDto.id)
          return {
              success: false,
              message: user.error,
              data: [],
          }
      }

      // Check if the user is already a member of the group
      if (group.members == null) {
          group.members = JSON.stringify([user.id]);
      } else {
          let members = JSON.parse(group.members);

          const isMember = members.some((member) => member === user.id);
          if (isMember) {
              await this.groupRequestsService.remove(+acceptGroupRequestDto.id)
              return {
                  success: false,
                  message: 'User is already a member of the group.',
                  data: [],
              };
          }

          members.push(user.id);
          group.members = JSON.stringify(members);
      }

      // Save the updated group
      await this.groupRepository.save(group);

      await this.groupRequestsService.remove(+acceptGroupRequestDto.id)

      //create notification
      let createNotificationDto = new CreateNotificationDto();
      createNotificationDto.user_id = user.id;
      createNotificationDto.title = 'Group Request';
      createNotificationDto.content = 'Your group request has been accepted';
      createNotificationDto.topic = 'group-request';
      createNotificationDto.topic_id = acceptGroupRequestDto.id;
      createNotificationDto.created_at = Date.now().toString();
      let notification = await this.notificationsService.create(createNotificationDto);

      //emit firebase notification
      if (user.fcm_token) {
          let firebaseService = new FirebaseService();
          await firebaseService.sendNotificationToDevice(user.fcm_token, {
              notification: {
                  title: 'Group Request Accepted',
                  body: 'Your group request has been accepted'
              }
          });
      }

      return {
          success: true,
          message: 'User added to the group successfully.',
          data: [],
      };
  }
}
