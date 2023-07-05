import {Controller, Get, Post, Body, Param, Delete, Query, UseGuards} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {MessagesService} from "../messages/messages.service";

@ApiTags('Groups')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService, private readonly messageService: MessagesService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
      createGroupDto.created_at = Date.now().toString();
      let res = await this.groupsService.create(createGroupDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Group created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.groupsService.findAll(page, limit);

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get('get-messages/:group_id')
  async getMessages(@Param('group_id') group_id: string, @Query('page') page?: number, @Query('limit') limit?: number) {
      let group = await this.groupsService.findOne(+group_id);

      if (group.error) {
          return {
              success: false,
              message: 'Group not found',
              data: []
          }
      }

      let res = await this.messageService.findAll(page, limit, {
          where: {
              group_id: 1
          }});

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.groupsService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
      let group = await this.groupsService.findOne(+id);
      if (group.error) {
          return {
              success: false,
              message: group.error,
              data: [],
          }
      }

      let res = await this.groupsService.update(+id, updateGroupDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Group updated successfully!',
          data: res.error ? [] : res,
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let group = await this.groupsService.findOne(+id);
      if (group.error) {
          return {
              success: false,
              message: group.error,
              data: [],
          }
      }

      let res = await this.groupsService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Group deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
