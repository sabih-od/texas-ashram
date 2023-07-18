import {IsEmail, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePrayerRequestDto {
    user_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 'Name' })
    name: string;

    @IsNotEmpty()
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

    @IsNotEmpty()
    @ApiProperty({ example: 'This is the description for prayer request' })
    description: string;

    created_at: string;
}
