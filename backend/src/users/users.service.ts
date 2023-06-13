import { Injectable, Inject, Catch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, EntityNotFoundError } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<any> {
        const user = await this.userRepository.create({
            first_name: createUserDto.first_name,
            last_name: createUserDto.last_name,
            email: createUserDto.email,
            password: createUserDto.password,
            role_id: createUserDto.role_id,
        });

        return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<any> {
        try {
            return await this.userRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'User Not Found'
                };
            }
        }
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
        const user = await this.findOne(id);

        if (user.error) {
            return user;
        }

        await this.userRepository.update(user, updateUserDto);

        return await this.findOne(id);
    }

    async remove(id: number): Promise<any> {
        const user = await this.findOne(id);

        if (user.error) {
            return user;
        }

        return await this.userRepository.delete(user);
    }
}
