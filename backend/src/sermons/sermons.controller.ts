import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseGuards,
    UseInterceptors,
    UploadedFile,
    ParseFilePipe,
    MaxFileSizeValidator,
    Req,
    Query,
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler, BadRequestException, UploadedFiles
} from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {
    deleteFileFromUploads,
    getRandomFileName,
    uploadFile
} from "../helpers/helper";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AnnouncementsService} from "../announcements/announcements.service";
import {NotificationsService} from "../notifications/notifications.service";
import {CreateNotificationDto} from "../notifications/dto/create-notification.dto";
import {FirebaseService} from "../firebase/firebase.service";
const MAX_FILE_SIZE = 100000000;

@Injectable()
export class MaxFileSizeInterceptor implements NestInterceptor {
    constructor(private readonly maxSize: number) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const files = request.files;

        if (files && files.file && files.file[0] && files.file[0].size > this.maxSize) {
            throw new BadRequestException(`File size exceeds the limit of ${this.maxSize} bytes`);
        }

        if (files && files.image && files.image[0] && files.image[0].size > this.maxSize) {
            throw new BadRequestException(`Image size exceeds the limit of ${this.maxSize} bytes`);
        }

        return next.handle().pipe(
            map((data) => {
                return data;
            }),
        );
    }
}

@ApiTags('Sermons')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService, private readonly notificationsService: NotificationsService) {}

  @Post()
  @UseInterceptors(
      FileFieldsInterceptor([
          { name: 'media', maxCount: 1 },
          { name: 'image', maxCount: 1 },
      ]),
      new MaxFileSizeInterceptor(MAX_FILE_SIZE), // Use the MaxFileSizeInterceptor
  )
  async create(@Body() createSermonDto: CreateSermonDto, @UploadedFiles() files: { media?: Express.Multer.File[], image?: Express.Multer.File[] }) {
        //file upload work
        // if (media && media.originalname && media.buffer) {
      // return files.image[0];
        if (files.media && files.media[0] && files.media[0].originalname && files.media[0].buffer) {
            let file_name = getRandomFileName(files.media[0]);

            let dir_path = '/uploads/sermons/';
            let file_path = '.' + dir_path + file_name;
            await uploadFile('.' + dir_path, file_path, files.media[0]);

            let app_url = process.env.APP_URL + ':' + process.env.PORT;
            createSermonDto.media = app_url + dir_path + file_name;
        }
        if (files.image && files.image[0] && files.image[0].originalname && files.image[0].buffer) {
            let file_name = getRandomFileName(files.image[0]);

            let dir_path = '/uploads/sermons/';
            let file_path = '.' + dir_path + file_name;
            await uploadFile('.' + dir_path, file_path, files.image[0]);

            let app_url = process.env.APP_URL + ':' + process.env.PORT;
            createSermonDto.image = app_url + dir_path + file_name;
        }

        createSermonDto.created_at = Date.now().toString();
        let res = await this.sermonsService.create(createSermonDto);

        //create notification
        let createNotificationDto = new CreateNotificationDto();
        createNotificationDto.title = 'New Sermon';
        createNotificationDto.content = createSermonDto.title;
        createNotificationDto.topic = 'sermon';
        createNotificationDto.topic_id = res.id;
        createNotificationDto.created_at = Date.now().toString();
        let notification = await this.notificationsService.create(createNotificationDto);

        //send notification
        let firebaseService = new FirebaseService();
        await firebaseService.sendNotification({
            data: {
                topic: 'sermon',
                notification: notification,
                sermon: res
            }
        });

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
  @UseInterceptors(
      FileFieldsInterceptor([
          { name: 'media', maxCount: 1 },
          { name: 'image', maxCount: 1 },
      ]),
      new MaxFileSizeInterceptor(MAX_FILE_SIZE),
  )
  async update(
      @Param('id') id: string,
      @Body() updateSermonDto: UpdateSermonDto,
      @UploadedFiles() files: { media?: Express.Multer.File[], image?: Express.Multer.File[] },
  ) {
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
      if (files.media && files.media[0] && files.media[0].originalname && files.media[0].buffer) {
          //delete file
          await deleteFileFromUploads(app_url, sermon.media);

          let dir_path = '/uploads/sermons/';
          let file_name = getRandomFileName(files.media[0]);
          let file_path = '.' + dir_path + file_name;

          await uploadFile('.' + dir_path, file_path, files.media[0]);

          updateSermonDto.media = app_url + dir_path + file_name;
      }
      if (files.image && files.image[0] && files.image[0].originalname && files.image[0].buffer) {
          //delete file
          await deleteFileFromUploads(app_url, sermon.image);

          let dir_path = '/uploads/sermons/';
          let file_name = getRandomFileName(files.image[0]);
          let file_path = '.' + dir_path + file_name;

          await uploadFile('.' + dir_path, file_path, files.image[0]);

          updateSermonDto.image = app_url + dir_path + file_name;
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
