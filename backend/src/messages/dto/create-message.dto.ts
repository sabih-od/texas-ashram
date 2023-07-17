import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateMessageDto {
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    group_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 'Hello!' })
    message: string;

    created_at: string;
}
