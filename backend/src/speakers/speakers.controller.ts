import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseGuards,
    UploadedFile,
    ParseFilePipe,
    MaxFileSizeValidator, UseInterceptors, Query
} from '@nestjs/common';
import { SpeakersService } from './speakers.service';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {deleteFileFromUploads, getRandomFileName, uploadFile} from "../helpers/helper";

@ApiTags('Speakers')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('speakers')
export class SpeakersController {
  constructor(private readonly speakersService: SpeakersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createSpeakerDto: CreateSpeakerDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ]
      })
  ) image: Express.Multer.File) {
      //file upload work
      if (image && image.originalname && image.buffer) {
          let file_name = getRandomFileName(image);

          let dir_path = '/uploads/speakers/';
          let file_path = '.' + dir_path + file_name;
          await uploadFile('.' + dir_path, file_path, image);

          let app_url = process.env.APP_URL + ':' + process.env.PORT;
          createSpeakerDto.image = app_url + dir_path + file_name;
      }

      createSpeakerDto.created_at = Date.now().toString();
      let res = await this.speakersService.create(createSpeakerDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Speaker created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.speakersService.findAll(page, limit);

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.speakersService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Post(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(@Param('id') id: string, @Body() updateSpeakerDto: UpdateSpeakerDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ],
          fileIsRequired: false
      })
  ) image?: Express.Multer.File) {
      let speaker = await this.speakersService.findOne(+id);
      if (speaker.error) {
          return {
              success: false,
              message: speaker.error,
              data: [],
          }
      }

      let app_url = process.env.APP_URL + ':' + process.env.PORT;

      //file upload work
      if (image && image.originalname && image.buffer) {
          //delete file
          await deleteFileFromUploads(app_url, speaker.image);

          let dir_path = '/uploads/speakers/';
          let file_name = getRandomFileName(image);
          let file_path = '.' + dir_path + file_name;

          await uploadFile('.' + dir_path, file_path, image);

          updateSpeakerDto.image = app_url + dir_path + file_name;
      }

      if (!Object.keys(updateSpeakerDto).length) {
          return {
              success: true,
              message: 'Speaker updated successfully.',
              data: [],
          };
      } else {
          let res = await this.speakersService.update(+id, updateSpeakerDto);

          return {
              success: !res.error,
              message: res.error ? res.error : 'Speaker updated successfully!',
              data: res.error ? [] : res,
          }
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let speaker = await this.speakersService.findOne(+id);
      if (speaker.error) {
          return {
              success: false,
              message: speaker.error,
              data: [],
          }
      }

      //delete uploaded file
      let app_url = process.env.APP_URL + ':' + process.env.PORT;
      await deleteFileFromUploads(app_url, speaker.image);

      let res = await this.speakersService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Speaker deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
