import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateAnnouncementDto } from './create-announcement.dto';

export class UpdateAnnouncementDto extends PartialType(CreateAnnouncementDto) {
    @ApiProperty({ example: 'Title' })
    title: string;

    @ApiProperty({ example: 'This is the description for announcement' })
    description: string;

    @ApiProperty({ example: '01-01-2023' })
    date: string;
}
