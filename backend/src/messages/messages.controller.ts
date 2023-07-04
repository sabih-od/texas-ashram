import {Controller, Get, Post, Body, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {GroupsService} from "../groups/groups.service";
import {UpdateGroupDto} from "../groups/dto/update-group.dto";

@ApiTags('Messages')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService, private readonly groupService: GroupsService) {}

  @Post()
  async create(@Body() createMessageDto: CreateMessageDto) {
      createMessageDto.created_at = Date.now().toString();

      let group = await this.groupService.findOne(createMessageDto.group_id);
      if (!group.error) {
          let updateGroupDto = new UpdateGroupDto();
          updateGroupDto.last_message = createMessageDto.message;
          updateGroupDto.last_updated = Date.now().toString();

          await this.groupService.update(group.id, updateGroupDto);
      }

      let res = await this.messagesService.create(createMessageDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Message created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.messagesService.findAll(page, limit);

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

      let res = await this.messagesService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Message deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
