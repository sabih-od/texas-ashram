import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseGuards,
    UseInterceptors,
    UploadedFile, ParseFilePipe, MaxFileSizeValidator, Query
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {
    deleteFileFromUploads,
    getRandomFileName,
    uploadFile
} from "../helpers/helper";
import {NotificationsService} from "../notifications/notifications.service";
import {CreateNotificationDto} from "../notifications/dto/create-notification.dto";
import {FirebaseService} from "../firebase/firebase.service";

@ApiTags('Posts')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService, private readonly notificationsService: NotificationsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('media'))
  async create(@Body() createPostDto: CreatePostDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ]
      })
  ) media: Express.Multer.File) {
      //file upload work
      if (media && media.originalname && media.buffer) {
          let file_name = getRandomFileName(media);

          let dir_path = '/uploads/posts/';
          let file_path = '.' + dir_path + file_name;
          await uploadFile('.' + dir_path, file_path, media);

          let app_url = process.env.APP_URL + ':' + process.env.PORT;
          createPostDto.media =  app_url + dir_path + file_name;
      }

      createPostDto.created_at = Date.now().toString();
      let res = await this.postsService.create(createPostDto);

      //create notification
      let createNotificationDto = new CreateNotificationDto();
      createNotificationDto.title = 'Post';
      createNotificationDto.content = createPostDto.title;
      createNotificationDto.topic = 'post';
      createNotificationDto.topic_id = res.id;
      createNotificationDto.created_at = Date.now().toString();
      let notification = await this.notificationsService.create(createNotificationDto);

      //send notification
      let firebaseService = new FirebaseService();
      await firebaseService.sendNotification({
          notification: {
              title: 'Post',
              body: createPostDto.title
          }
      });

      return {
          success: !res.error,
          message: res.error ? res.error : 'Post created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    let res = await this.postsService.findAll(page, limit);

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let res = await this.postsService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Post(':id')
  @UseInterceptors(FileInterceptor('media'))
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ],
          fileIsRequired: false
      })
  ) media?: Express.Multer.File) {
      let post = await this.postsService.findOne(+id);
      if (post.error) {
          return {
              success: false,
              message: post.error,
              data: [],
          }
      }

      let app_url = process.env.APP_URL + ':' + process.env.PORT;

      //file upload work
      if (media && media.originalname && media.buffer) {
          //delete file
          await deleteFileFromUploads(app_url, post.media);

          let dir_path = '/uploads/posts/';
          let file_name = getRandomFileName(media);
          let file_path = '.' + dir_path + file_name;

          await uploadFile('.' + dir_path, file_path, media);

          updatePostDto.media = app_url + dir_path + file_name;
      }

      if (!Object.keys(updatePostDto).length) {
          return {
              success: true,
              message: 'Post updated successfully.',
              data: [],
          };
      } else {
          let res = await this.postsService.update(+id, updatePostDto);

          return {
              success: !res.error,
              message: res.error ? res.error : 'Post updated successfully!',
              data: res.error ? [] : res,
          }
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let post = await this.postsService.findOne(+id);
      if (post.error) {
          return {
              success: false,
              message: post.error,
              data: [],
          }
      }

      //delete uploaded file
      let app_url = process.env.APP_URL + ':' + process.env.PORT;
      await deleteFileFromUploads(app_url, post.media);

      let res = await this.postsService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Post deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
