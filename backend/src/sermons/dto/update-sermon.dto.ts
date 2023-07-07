import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateSermonDto } from './create-sermon.dto';
import {IsUrl, MaxLength} from "class-validator";

export class UpdateSermonDto extends PartialType(CreateSermonDto) {
    @MaxLength(20)
    @ApiProperty({ example: 'Sermon title' })
    title: string;

    @IsUrl()
    @ApiProperty({ example: 'https://you.tube/asdghasuydgt' })
    url: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    media: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    image: string;

    @ApiProperty({ example: 'This is the description for sermons' })
    description: string;

    @ApiProperty({ example: 'hvsGsu4' })
    youtube_video_id: string;

    created_at: string;
}
