import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from "class-validator";

export class AddUserDto {
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    group_id: number;
}
