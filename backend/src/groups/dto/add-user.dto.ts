import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateGroupDto } from './create-group.dto';
import {IsNotEmpty} from "class-validator";

export class AddUserDto {
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    group_id: number;
}
