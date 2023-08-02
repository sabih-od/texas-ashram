import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    UploadedFile,
    ParseFilePipe, MaxFileSizeValidator, UseGuards
} from '@nestjs/common';
import {PageMediaService} from './page-media.service';
import {CreatePageMediaDto} from './dto/create-page-media.dto';
import {UpdatePageMediaDto} from './dto/update-page-media.dto';
import {FileInterceptor} from "@nestjs/platform-express";
import {getRandomFileName, uploadFile} from "../helpers/helper";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";

@ApiTags('Posts')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('page-media')
export class PageMediaController {
    constructor(private readonly pageMediaService: PageMediaService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('media'))
    async create(@Body() createPageMediaDto: CreatePageMediaDto, @UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({maxSize: 100000000})
            ]
        })
    ) media: Express.Multer.File) {
        //file upload work
        if (media && media.originalname && media.buffer) {
            let file_name = getRandomFileName(media);

            let dir_path = '/uploads/page-media/';
            let file_path = '.' + dir_path + file_name;
            await uploadFile('.' + dir_path, file_path, media);

            let app_url = process.env.APP_URL + ':' + process.env.PORT;
            createPageMediaDto.media = app_url + dir_path + file_name;
        }

        createPageMediaDto.created_at = Date.now().toString();
        let res = await this.pageMediaService.create(createPageMediaDto);

        return {
            success: !res.error,
            message: res?.error ? res.error : 'Media uploaded successfully!',
            data: res?.error ? [] : res,
        }
    }

    @Get()
    findAll() {
        return this.pageMediaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.pageMediaService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePageMediaDto: UpdatePageMediaDto) {
        return this.pageMediaService.update(+id, updatePageMediaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.pageMediaService.remove(+id);
    }
}
