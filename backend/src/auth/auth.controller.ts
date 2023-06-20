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
    async signIn(@Body() signInDto: SigninDto) {
        let res = await this.authService.signIn(signInDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Sign In successful!',
            data: res.error ? [] : res,
        }
    }

    @HttpCode(HttpStatus.OK)
    @Post('signup')
    async signUp(@Body() signUpDto: CreateUserDto) {
        let res = await this.authService.signup(signUpDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Sign Up successful!',
            data: res.error ? [] : res,
        }
    }

    @UseGuards(AuthGuard)
    @Get('me')
    @ApiBearerAuth()
    me(@Request() req) {
        return {
            success: true,
            message: '',
            data: req.user,
        }
    }
}
