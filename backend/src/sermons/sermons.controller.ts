import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseGuards,
    UseInterceptors,
    UploadedFile, ParseFilePipe, MaxFileSizeValidator, Req, Query
} from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {
    deleteFileFromUploads,
    getRandomFileName,
    uploadFile
} from "../helpers/helper";

@ApiTags('Sermons')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('media'))
  async create(@Body() createSermonDto: CreateSermonDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ]
      })
  ) media: Express.Multer.File) {
        //file upload work
        if (media && media.originalname && media.buffer) {
            let file_name = getRandomFileName(media);

            let dir_path = '/uploads/sermons/';
            let file_path = '.' + dir_path + file_name;
            await uploadFile('.' + dir_path, file_path, media);

            let app_url = process.env.APP_URL + ':' + process.env.PORT;
            createSermonDto.media = app_url + dir_path + file_name;
        }

        let res = await this.sermonsService.create(createSermonDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Sermon created successfully!',
            data: res.error ? [] : res,
        }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.sermonsService.findAll(page, limit);

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let res = await this.sermonsService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Post(':id')
  @UseInterceptors(FileInterceptor('media'))
  async update(@Param('id') id: string, @Body() updateSermonDto: UpdateSermonDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ],
          fileIsRequired: false
      })
  ) media?: Express.Multer.File) {
      let sermon = await this.sermonsService.findOne(+id);
      if (sermon.error) {
          return {
              success: false,
              message: sermon.error,
              data: [],
          }
      }

      let app_url = process.env.APP_URL + ':' + process.env.PORT;

      //file upload work
      if (media && media.originalname && media.buffer) {
          //delete file
          await deleteFileFromUploads(app_url, sermon.media);

          let dir_path = '/uploads/sermons/';
          let file_name = getRandomFileName(media);
          let file_path = '.' + dir_path + file_name;

          await uploadFile('.' + dir_path, file_path, media);

          updateSermonDto.media = app_url + dir_path + file_name;
      }

      if (!Object.keys(updateSermonDto).length) {
          return {
              success: true,
              message: 'Sermon updated successfully.',
              data: [],
          };
      } else {
          let res = await this.sermonsService.update(+id, updateSermonDto);

          return {
              success: !res.error,
              message: res.error ? res.error : 'Sermon updated successfully!',
              data: res.error ? [] : res,
          }
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let sermon = await this.sermonsService.findOne(+id);
      if (sermon.error) {
          return {
              success: false,
              message: sermon.error,
              data: [],
          }
      }

      //delete uploaded file
      let app_url = process.env.APP_URL + ':' + process.env.PORT;
      await deleteFileFromUploads(app_url, sermon.media);

      let res = await this.sermonsService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Sermon deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
