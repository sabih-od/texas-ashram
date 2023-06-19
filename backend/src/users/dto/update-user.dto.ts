import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsEmail, MaxLength} from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @MaxLength(20)
    first_name: string;

    @MaxLength(20)
    last_name: string;

    @IsEmail()
    email: string;

    password: string;

    role_id: number;

}
