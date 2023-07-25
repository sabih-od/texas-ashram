import {IsEmail, IsNotEmpty} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class BlockUserDto {
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: string;
}
