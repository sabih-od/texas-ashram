import {
    CanActivate,
    ExecutionContext, Inject,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';
import {Repository} from "typeorm";
import {User} from "../users/entities/user.entity";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret
                }
            );
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }

        //if user is blocked
        let user = await this.userRepository.findOneOrFail({
            where: {
                id: request['user'].id
            }
        });

        if (user.blocked_at && user.blocked_at != null && user.blocked_at != "") {
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
