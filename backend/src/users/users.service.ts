import { Injectable, Inject, Catch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Repository, EntityNotFoundError, QueryFailedError} from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<any> {
        try {
            let hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            // const isMatch = await bcrypt.compare(password, hash);

            const user = await this.userRepository.create({
                first_name: createUserDto.first_name,
                last_name: createUserDto.last_name,
                email: createUserDto.email,
                phone: createUserDto.phone,
                password: hashedPassword,
            });

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

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<any> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: {
                    id: id
                }
            });

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

    async findOneByEmail(email: string): Promise<any> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: {
                    email: email
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

            await this.userRepository.update(user, updateUserDto);

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

        return await this.userRepository.delete(user);
    }
}
