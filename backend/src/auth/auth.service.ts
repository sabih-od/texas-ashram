import {Inject, Injectable} from '@nestjs/common';
import { UsersService } from "../users/users.service";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {SigninDto} from "./dto/signin.dto";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {User} from "../users/entities/user.entity";
import {ForgotPasswordDto} from "./dto/forgot-password.dto";
import {generateOTP} from "../helpers/helper";
import {MailService} from "../mail/mail.service";
import {SubmitOTPDto} from "./dto/submit-otp.dto";
import {UpdateUserDto} from "../users/dto/update-user.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    async signIn(signInDto: SigninDto): Promise<any> {
        const user = await this.usersService.findOneByEmail(signInDto.email);

        if (user.error) {
            return user;
        }

        if (!await bcrypt.compare(signInDto.password, user?.password)) {
            return {
                error: 'Unauthorized'
            };
        }
        const { password, ...result } = user;
        const payload = { sub: user.id, ...user};

        return {
            ...payload,
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signup(signUpDto: CreateUserDto): Promise<any> {
        const user = await this.usersService.create(signUpDto);

        if (user.error) {
            return user;
        }

        const payload = { sub: user.id, ...user};

        return {
            ...payload,
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async uploadProfilePicture(user_id: number, file_path): Promise<any> {
        try {
            let user = await this.userRepository.findOneOrFail({
                where: {
                    id: user_id
                }
            });

            return await this.userRepository.update(user.id, {
                profile_picture: file_path
            });
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async updateProfile(updateUserDto: UpdateUserDto, user_id: number): Promise<any> {
        try {
            let user = await this.userRepository.findOneOrFail({
                where: {
                    id: user_id
                }
            });

            if (updateUserDto.password) {
                updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
            }

            return await this.userRepository.update(user.id, updateUserDto);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async getUserByEmail (email: string): Promise<any> {
        try {
            const user = await this.usersService.findOneByEmail(email);

            if (user.error) {
                return user;
            }

            delete user.password;
            return user;
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'User Not Found'
                };
            }
        }
    }

    async forgotPassword (forgotPasswordDto: ForgotPasswordDto): Promise<any> {
        try {
            const user = await this.usersService.findOneByEmail(forgotPasswordDto.email);

            if (user.error) {
                return user;
            }

            let generated_otp = generateOTP();

            //save otp to database
            await this.userRepository.update(user.id, {
                otp: generated_otp
            });

            let mailService = new MailService();
            await mailService.sendEmail(user.email, 'Texas Ashram | OTP', 'Your OTP is: ' + generated_otp);

            return 'An OTP was sent to your email';
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'No user with the provided email was found.'
                };
            }
        }
    }

    async submitOTP (submitOTPDto: SubmitOTPDto): Promise<any> {
        try {
            let user;

            //bypass otp by 111111
            if (submitOTPDto.otp == '111111') {
                user = await this.usersService.findOneByEmail(submitOTPDto.email);
            } else {
                user = await this.usersService.findOneByEmail(submitOTPDto.email, {otp: submitOTPDto.otp});
            }

            if (user.error) {
                return {
                    error: 'Your OTP was incorrect'
                };
            }

            const payload = { sub: user.id, ...user};

            return {
                ...payload,
                access_token: await this.jwtService.signAsync(payload),
            };
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'No user with the provided email was found.'
                };
            }
        }
    }
}
