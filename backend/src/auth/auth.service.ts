import {Injectable, UnauthorizedException} from '@nestjs/common';
import { UsersService } from "../users/users.service";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {SigninDto} from "./dto/signin.dto";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signIn(signInDto: SigninDto): Promise<any> {
        const user = await this.usersService.findOneByEmail(signInDto.email);

        if (user.error) {
            return user;
        }

        if (!await bcrypt.compare(signInDto.password, user?.password)) {
            throw new UnauthorizedException();
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
}
