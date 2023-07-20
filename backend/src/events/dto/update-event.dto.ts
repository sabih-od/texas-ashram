import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import {ApiProperty} from "@nestjs/swagger";

export class UpdateEventDto extends PartialType(CreateEventDto) {
    @ApiProperty({ example: 'Texas Ashram' })
    title: string;

    @ApiProperty({ example: 'Text Your Description' })
    description: string;

    @ApiProperty({ example: '05-07-2023' })
    date_to: string;

    @ApiProperty({ example: '05-07-2023' })
    date_from: string;

    @ApiProperty({ example: '10:37 PM' })
    start_time: string;

    @ApiProperty({ example: '10:37 AM' })
    end_time: string;

    @ApiProperty({ example: 'USA' })
    location: string;

    @ApiProperty({ example: 'Place Your Image' })
    image: string;
}
