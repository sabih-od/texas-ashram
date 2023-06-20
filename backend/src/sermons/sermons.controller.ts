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
    UploadedFile, ParseFilePipe, MaxFileSizeValidator, Req
} from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {FileInterceptor, MulterModule} from "@nestjs/platform-express";
import {generateRandomString, getFileExtension} from "../helpers/helper";
import {promises as fsPromises} from "fs";

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
            let random_string = generateRandomString(20);
            let file_extension = getFileExtension(media.originalname);
            let file_name = random_string + '.' + file_extension;

            let dir_path = '/uploads/sermons/';
            let filepath = '.' + dir_path + file_name;

            await fsPromises.mkdir('.' + dir_path, { recursive: true });
            await fsPromises.writeFile(filepath, media.buffer);
            createSermonDto.media = dir_path + file_name;
        }

        return this.sermonsService.create(createSermonDto);
  }

  @Get()
  findAll() {
    return this.sermonsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sermonsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('media'))
  async update(@Param('id') id: string, @Body() updateSermonDto: UpdateSermonDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ]
      })
  ) media: Express.Multer.File) {
      //file upload work
      if (media && media.originalname && media.buffer) {
          //delete file
          let sermon = await this.sermonsService.findOne(+id);
          let delete_path = '.' + sermon.media;
          fsPromises.access(delete_path)
              .then(() => {
                  return fsPromises.unlink(delete_path);
              });

          let dir_path = '/uploads/sermons/';
          let filepath = delete_path;

          await fsPromises.mkdir('.' + dir_path, { recursive: true });
          await fsPromises.writeFile(filepath, media.buffer);
      }

    return this.sermonsService.update(+id, updateSermonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
      let sermon = await this.sermonsService.findOne(+id);

      //delete uploaded file
      let delete_path = '.' + sermon.media;
      fsPromises.access(delete_path)
          .then(() => {
              return fsPromises.unlink(delete_path);
          });

      return this.sermonsService.remove(+id);
  }
}
