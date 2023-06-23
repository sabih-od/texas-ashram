import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  UploadedFile, ParseFilePipe, MaxFileSizeValidator, Query
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {generateRandomString, getFileExtension} from "../helpers/helper";
import {promises as fsPromises} from "fs";

@ApiTags('Events')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createEventDto: CreateEventDto, @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({maxSize: 100000000})
        ]
      })
  ) image: Express.Multer.File) {
    //file upload work
    if (image && image.originalname && image.buffer) {
      let random_string = generateRandomString(20);
      let file_extension = getFileExtension(image.originalname);
      let file_name = random_string + '.' + file_extension;

      let dir_path = '/uploads/events/';
      let filepath = '.' + dir_path + file_name;

      await fsPromises.mkdir('.' + dir_path, { recursive: true });
      await fsPromises.writeFile(filepath, image.buffer);
      createEventDto.image = dir_path + file_name;
    }

    let res = await this.eventsService.create(createEventDto);

    return {
      success: !res.error,
      message: res.error ? res.error : 'Event created successfully!',
      data: res.error ? [] : res,
    }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    let res = await this.eventsService.findAll(page, limit);

    return {
      success: true,
      message: '',
      res
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let res = await this.eventsService.findOne(+id);

    return {
      success: !res.error,
      message: res.error ? res.error : '',
      data: res.error ? [] : res,
    }
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto, @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({maxSize: 100000000})
        ],
        fileIsRequired: false
      })
  ) image?: Express.Multer.File) {
    let event = await this.eventsService.findOne(+id);
    if (event.error) {
      return {
        success: false,
        message: event.error,
        data: [],
      }
    }

    //file upload work
    if (image && image.originalname && image.buffer) {
      //delete file
      let event = await this.eventsService.findOne(+id);
      let delete_path = '.' + event.image;
      fsPromises.access(delete_path)
          .then(() => {
            return fsPromises.unlink(delete_path);
          });

      let dir_path = '/uploads/events/';
      let filepath = delete_path;

      await fsPromises.mkdir('.' + dir_path, { recursive: true });
      await fsPromises.writeFile(filepath, image.buffer);
    }

    if (!Object.keys(updateEventDto).length) {
      return {
        success: true,
        message: 'Event updated successfully.',
        data: [],
      };
    } else {
      let res = await this.eventsService.update(+id, updateEventDto);

      return {
        success: !res.error,
        message: res.error ? res.error : 'Event updated successfully!',
        data: res.error ? [] : res,
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    let event = await this.eventsService.findOne(+id);
    if (event.error) {
      return {
        success: false,
        message: event.error,
        data: [],
      }
    }

    //delete uploaded file
    let delete_path = '.' + event.media;
    fsPromises.access(delete_path)
        .then(() => {
          return fsPromises.unlink(delete_path);
        });

    let res = await this.eventsService.remove(+id);

    return {
      success: !res.error,
      message: res.error ? res.error : 'Event deleted successfully!',
      data: res.error ? [] : res,
    }
  }
}
