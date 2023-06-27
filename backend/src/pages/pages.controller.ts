import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";

@ApiTags('Pages')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  async create(@Body() createPageDto: CreatePageDto) {
      let res = await this.pagesService.create(createPageDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Page created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.pagesService.findAll(page, limit);

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.pagesService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
      let page = await this.pagesService.findOne(+id);
      if (page.error) {
          return {
              success: false,
              message: page.error,
              data: [],
          }
      }

      let res = await this.pagesService.update(+id, updatePageDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Page updated successfully!',
          data: res.error ? [] : res,
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let page = await this.pagesService.findOne(+id);
      if (page.error) {
          return {
              success: false,
              message: page.error,
              data: [],
          }
      }

      let res = await this.pagesService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Page deleted successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get('get-by-name/:name')
  async getByName(@Param('name') name: string) {
      let res = await this.pagesService.getByName(name);

      return {
          success: !res.error,
          message: res.error ? res.error : [],
          data: res.error ? [] : res,
      }
  }

  @Get('home-banner/get')
  async getHomeBanner() {
      let res = await this.pagesService.getByName('home');

      res = JSON.parse(res.content)

      return {
          success: !res.error,
          message: res.error ? res.error : [],
          data: res.error ? [] : res,
      }
  }

    @Get('seeder/seed')
    async seed() {
        let res = await this.pagesService.seed();

        return {
            success: !res.error,
            message: res.error ? res.error : 'Seeder ran successfully!',
            data: res.error ? [] : res,
        }
    }
}
