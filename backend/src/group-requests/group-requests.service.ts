import {Inject, Injectable} from '@nestjs/common';
import { CreateGroupRequestDto } from './dto/create-group-request.dto';
import { UpdateGroupRequestDto } from './dto/update-group-request.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Group} from "../groups/entities/group.entity";
import {GroupRequest} from "./entities/group-request.entity";

@Injectable()
export class GroupRequestsService {
    constructor(
        @Inject('GROUP_REQUEST_REPOSITORY')
        private groupRequestRepository: Repository<GroupRequest>,
    ) {}

    async create(createGroupRequestDto: CreateGroupRequestDto): Promise<any> {
        try {
            const group_request = await this.groupRequestRepository.create(createGroupRequestDto);

            await this.groupRequestRepository.save(group_request);

            return await this.findOne(group_request.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {
        const [data, total] = await this.groupRequestRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'DESC'
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
            return await this.groupRequestRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Group Request Not Found'
                };
            }
        }
    }

    async update(id: number, updateGroupRequestDto: UpdateGroupRequestDto): Promise<any> {
        try {
            const group_request = await this.findOne(id);

            if (group_request.error) {
                return group_request;
            }

            await this.groupRequestRepository.update(group_request.id, updateGroupRequestDto);

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
        const group_request = await this.findOne(id);

        if (group_request.error) {
            return group_request;
        }

        return await this.groupRequestRepository.delete(group_request.id);
    }
}
