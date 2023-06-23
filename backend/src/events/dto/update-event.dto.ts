import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import {MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateEventDto extends PartialType(CreateEventDto) {
    @MaxLength(20)
    @ApiProperty({ example: 'Texas Ashram' })
    title: string;

    @MaxLength(200)
    @ApiProperty({ example: 'Text Your Description' })
    description: string;

    @ApiProperty({ example: '05-07-2023' })
    date_to: string;

    @ApiProperty({ example: '05-07-2023' })
    date_from: string;

    @ApiProperty({ example: 'USA' })
    location: string;

    @ApiProperty({ example: 'Place Your Image' })
    image: string;
}
