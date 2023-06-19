import {Body, Controller, HttpCode, HttpStatus, Post, Get, Request, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { AuthGuard } from './auth.guard';
import {SigninDto} from "./dto/signin.dto";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SigninDto) {
        return this.authService.signIn(signInDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signup')
    signUp(@Body() signUpDto: CreateUserDto) {
        return this.authService.signup(signUpDto);
    }

    @UseGuards(AuthGuard)
    @Get('me')
    me(@Request() req) {
        return req.user;
    }
}
