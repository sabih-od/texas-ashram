import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateNotificationDto {
    icon: string;

    @ApiProperty({ example: 1 })
    user_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 'New event' })
    title: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'New event' })
    content: string;

    created_at: string;
}
