import {Injectable, Inject, Catch} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {Repository, EntityNotFoundError, QueryFailedError, Not} from 'typeorm';
import {User} from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {
    }

    async create(createUserDto: CreateUserDto): Promise<any> {
        try {
            createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
            // const isMatch = await bcrypt.compare(password, hash);

            const user = await this.userRepository.create(createUserDto);

            await this.userRepository.save(user);

            return await this.findOne(user.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        const [data, total] = await this.userRepository.findAndCount({
            where: {role_id: Not(1)},
            skip: (page - 1) * limit,
            take: limit,
            ...query_object
        });

        const totalPages = Math.ceil(total / limit);

        return {
            data,
            total,
            currentPage: page,
            totalPages,
        };
    }

    async findOne(id: number): Promise<any> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: {
                    id: id
                }
            });

            delete user.password;
            delete user.otp;
            return user;
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'User Not Found'
                };
            }
        }
    }

    async findOneByEmail(email: string, args?: Object): Promise<any> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: {
                    email: email,
                    ...args
                }
            });

            return user;
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'User Not Found'
                };
            }
        }
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
        try {
            const user = await this.findOne(id);

            if (user.error) {
                return user;
            }

            if (updateUserDto.password) {
                updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
            }

            await this.userRepository.update(id, updateUserDto);

            return await this.findOne(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async remove(id: number): Promise<any> {
        const user = await this.findOne(id);

        if (user.error) {
            return user;
        }

        return await this.userRepository.delete(id);
    }
}
