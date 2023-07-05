import {IsNotEmpty, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateEventDto {
    @IsNotEmpty()
    @MaxLength(20)
    @ApiProperty({ example: 'Texas Ashram' })
    title: string;

    @IsNotEmpty()
    @MaxLength(200)
    @ApiProperty({ example: 'Text Your Description' })
    description: string;

    @IsNotEmpty()
    @ApiProperty({ example: '05-07-2023' })
    date_to: string;

    @IsNotEmpty()
    @ApiProperty({ example: '05-07-2023' })
    date_from: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'USA' })
    location: string;

    @ApiProperty({ example: 'Place Your Image' })
    image: string;

    created_at: string;
}
