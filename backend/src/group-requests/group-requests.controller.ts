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

@ApiTags('Group Requests')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('group-requests')
export class GroupRequestsController {
  constructor(
      private readonly groupRequestsService: GroupRequestsService,
      private readonly groupsService: GroupsService,
      private readonly usersService: UsersService,
      @Inject('GROUP_REPOSITORY')
      private groupRepository: Repository<Group>,
  ) {}

  @Post()
  async create(@Body() createGroupRequestDto: CreateGroupRequestDto) {
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

      return {
          success: true,
          message: 'User added to the group successfully.',
          data: [],
      };
  }
}
