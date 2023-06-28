import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query} from '@nestjs/common';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {AuthService} from "../auth/auth.service";
import {CreatePrayerRequestDto} from "../prayer-requests/dto/create-prayer-request.dto";

@ApiTags('Donations')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService, private readonly authService: AuthService) {}

  @Post()
  async create(@Body() createDonationDto: CreateDonationDto, @Request() req) {
      let user = await this.authService.getUserByEmail(req.user.email);
      createDonationDto.user_id = user.id;
      createDonationDto.name = user.first_name + ' ' + user.last_name;

      let res = await this.donationsService.create(createDonationDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Donation created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.donationsService.findAll(page, limit);

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.donationsService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDonationDto: UpdateDonationDto) {
      let donation = await this.donationsService.findOne(+id);
      if (donation.error) {
          return {
              success: false,
              message: donation.error,
              data: [],
          }
      }

      let res = await this.donationsService.update(+id, updateDonationDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Donation updated successfully!',
          data: res.error ? [] : res,
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let donation = await this.donationsService.findOne(+id);
      if (donation.error) {
          return {
              success: false,
              message: donation.error,
              data: [],
          }
      }

      let res = await this.donationsService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Donation deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
