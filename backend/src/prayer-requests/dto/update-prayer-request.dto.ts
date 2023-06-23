import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreatePrayerRequestDto } from './create-prayer-request.dto';
import {IsEmail} from "class-validator";

export class UpdatePrayerRequestDto extends PartialType(CreatePrayerRequestDto) {
    @ApiProperty({ example: 'Name' })
    name: string;

    @IsEmail()
    @ApiProperty({ example: 'asd441@mailinator.com' })
    email: string;

    @ApiProperty({ example: '1234567890' })
    contact: string;

    @ApiProperty({ example: '01-01-2023' })
    start_date: string;

    @ApiProperty({ example: '01-01-2023' })
    end_date: string;

    @ApiProperty({ example: '22:15' })
    time: string;

    @ApiProperty({ example: 'This is the description for prayer request' })
    description: string;
}
