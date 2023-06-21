import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
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
import {generateRandomString, getFileExtension} from "../helpers/helper";
import {promises as fsPromises} from "fs";

@ApiTags('Posts')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

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
          let random_string = generateRandomString(20);
          let file_extension = getFileExtension(media.originalname);
          let file_name = random_string + '.' + file_extension;

          let dir_path = '/uploads/posts/';
          let filepath = '.' + dir_path + file_name;

          await fsPromises.mkdir('.' + dir_path, { recursive: true });
          await fsPromises.writeFile(filepath, media.buffer);
          createPostDto.media = dir_path + file_name;
      }

      let res = await this.postsService.create(createPostDto);

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

  @Patch(':id')
  @UseInterceptors(FileInterceptor('media'))
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ]
      })
  ) media: Express.Multer.File) {
      let post = await this.postsService.findOne(+id);
      if (post.error) {
          return {
              success: false,
              message: post.error,
              data: [],
          }
      }

      //file upload work
      if (media && media.originalname && media.buffer) {
          //delete file
          let delete_path = '.' + post.media;
          fsPromises.access(delete_path)
              .then(() => {
                  return fsPromises.unlink(delete_path);
              });

          let dir_path = '/uploads/posts/';
          let filepath = delete_path;

          await fsPromises.mkdir('.' + dir_path, { recursive: true });
          await fsPromises.writeFile(filepath, media.buffer);
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
              message: res.error ? res.error : 'Sermon updated successfully!',
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
      let delete_path = '.' + post.media;
      fsPromises.access(delete_path)
          .then(() => {
              return fsPromises.unlink(delete_path);
          });

      let res = await this.postsService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Post deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
