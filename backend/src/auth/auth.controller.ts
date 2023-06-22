import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Get,
    Request,
    UseGuards,
    UseInterceptors,
    UploadedFile, ParseFilePipe, MaxFileSizeValidator, Patch
} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { AuthGuard } from './auth.guard';
import {SigninDto} from "./dto/signin.dto";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import {promises as fsPromises} from "fs";
import {generateRandomString, getFileExtension} from "../helpers/helper";

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
    async me(@Request() req) {
        let user = await this.authService.getUserByEmail(req.user.email);

        return {
            success: !user.error,
            message: user.error ? user.error : '',
            data: user.error ? [] : user,
        }
    }

    @UseGuards(AuthGuard)
    @Patch('upload-profile-picture')
    @ApiBearerAuth()
    @UseInterceptors(FileInterceptor('profile_picture'))
    async uploadProfilePicture(@Request() req, @UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({maxSize: 100000000})
            ]
        })
    ) profile_picture: Express.Multer.File) {
        let dir_path = '/uploads/users/';
        let filepath = '';

        let user = await this.authService.getUserByEmail(req.user.email);
        if (user.error) {
            return {
                success: false,
                message: user.error,
                data: [],
            }
        }

        //delete if present and get filepath
        if (user.profile_picture != null) {
            let delete_path = '.' + user.profile_picture;
            fsPromises.access(delete_path)
                .then(() => {
                    return fsPromises.unlink(delete_path);
                });

            filepath = user.profile_picture;
        } else {
            let file_name = generateRandomString(20) + '.' + getFileExtension(profile_picture.originalname);
            filepath = dir_path + file_name;
        }

        await fsPromises.mkdir('.' + dir_path, { recursive: true });
        await fsPromises.writeFile('.' + filepath, profile_picture.buffer);

        let res = await this.authService.uploadProfilePicture(user.id, filepath);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Profile picture updated successfully!',
            data: res.error ? [] : res,
        }
    }
}
