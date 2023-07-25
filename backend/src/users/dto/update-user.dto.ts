import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsEmail, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @MaxLength(20)
    @ApiProperty({ example: 'cedric' })
    first_name: string;

    @MaxLength(20)
    @ApiProperty({ example: 'maya' })
    last_name: string;

    @IsEmail()
    @ApiProperty({ example: 'asd441@mailinator.com' })
    email: string;

    @ApiProperty({ example: '123456' })
    phone: string;

    @ApiProperty({ example: 'admin!@#' })
    password: string;

    role_id: number;

    fcm_token: string;

    blocked_users: string;

    blocked_at: string;
}
