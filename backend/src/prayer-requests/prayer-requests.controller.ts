import {Controller, Get, Post, Body, Param, Delete, UseGuards, Query, Request} from '@nestjs/common';
import { PrayerRequestsService } from './prayer-requests.service';
import { CreatePrayerRequestDto } from './dto/create-prayer-request.dto';
import { UpdatePrayerRequestDto } from './dto/update-prayer-request.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {AuthService} from "../auth/auth.service";

@ApiTags('Prayer Requests')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('prayer-requests')
export class PrayerRequestsController {
  constructor(private readonly prayerRequestsService: PrayerRequestsService, private readonly authService: AuthService) {}

  @Post()
  async create(@Body() createPrayerRequestDto: CreatePrayerRequestDto, @Request() req) {
      let user = await this.authService.getUserByEmail(req.user.email);
      createPrayerRequestDto.user_id = user.id;

      let res = await this.prayerRequestsService.create(createPrayerRequestDto);

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

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.prayerRequestsService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Get('get-by-user-id/:user_id')
  async findOneByUserId(@Param('user_id') user_id: number) {
      let res = await this.prayerRequestsService.findOneByUserId(user_id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

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
