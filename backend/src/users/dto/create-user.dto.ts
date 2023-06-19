import {IsEmail, IsNotEmpty, MaxLength} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(20)
    first_name: string;

    @IsNotEmpty()
    @MaxLength(20)
    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    role_id: number;

}
