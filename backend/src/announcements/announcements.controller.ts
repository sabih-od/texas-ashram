import {Controller, Get, Post, Body, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";

@ApiTags('Announcements')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Post()
  async create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
      let res = await this.announcementsService.create(createAnnouncementDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Announcement created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.announcementsService.findAll(page, limit);

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.announcementsService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto) {
      let announcement = await this.announcementsService.findOne(+id);
      if (announcement.error) {
          return {
              success: false,
              message: announcement.error,
              data: [],
          }
      }

      let res = await this.announcementsService.update(+id, updateAnnouncementDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Announcement updated successfully!',
          data: res.error ? [] : res,
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let announcement = await this.announcementsService.findOne(+id);
      if (announcement.error) {
          return {
              success: false,
              message: announcement.error,
              data: [],
          }
      }

      let res = await this.announcementsService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Announcement deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}