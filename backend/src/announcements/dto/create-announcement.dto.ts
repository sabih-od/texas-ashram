import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateAnnouncementDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Title' })
    title: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'This is the description for announcement' })
    description: string;

    @IsNotEmpty()
    @ApiProperty({ example: '01-01-2023' })
    date: string;
}
