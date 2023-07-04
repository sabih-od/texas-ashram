import {Inject, Injectable} from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Group} from "./entities/group.entity";

@Injectable()
export class GroupsService {
    constructor(
        @Inject('GROUP_REPOSITORY')
        private groupRepository: Repository<Group>,
    ) {}

    async create(createGroupDto: CreateGroupDto): Promise<any> {
        try {
            const group = await this.groupRepository.create(createGroupDto);

            await this.groupRepository.save(group);

            return await this.findOne(group.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {
        const [data, total] = await this.groupRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                last_updated: 'DESC'
            }
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
            return await this.groupRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Group Not Found'
                };
            }
        }
    }

    async update(id: number, updateGroupDto: UpdateGroupDto): Promise<any> {
        try {
            const group = await this.findOne(id);

            if (group.error) {
                return group;
            }

            await this.groupRepository.update(group, updateGroupDto);

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
        const group = await this.findOne(id);

        if (group.error) {
            return group;
        }

        return await this.groupRepository.delete(group);
    }
}
