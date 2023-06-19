import {Body, Controller, HttpCode, HttpStatus, Post, Get, Request, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { AuthGuard } from './auth.guard';
import {SigninDto} from "./dto/signin.dto";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@ApiTags('Auth')
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
    @ApiBearerAuth()
    me(@Request() req) {
        return req.user;
    }
}
