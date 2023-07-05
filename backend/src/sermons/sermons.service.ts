import {Inject, Injectable} from '@nestjs/common';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Sermon} from "./entities/sermon.entity";

@Injectable()
export class SermonsService {
    constructor(
        @Inject('SERMON_REPOSITORY')
        private sermonRepository: Repository<Sermon>,
    ) {}

    async create(createSermonDto: CreateSermonDto): Promise<any> {
        try {
            const sermon = await this.sermonRepository.create(createSermonDto);

            await this.sermonRepository.save(sermon);

            return await this.findOne(sermon.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {id: 'DESC'}}): Promise<any> {
        const [data, total] = await this.sermonRepository.findAndCount({
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
            return await this.sermonRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Sermon Not Found'
                };
            }
        }
    }

    async update(id: number, updateSermonDto: UpdateSermonDto): Promise<any> {
        try {
            const sermon = await this.findOne(id);

            if (sermon.error) {
                return sermon;
            }

            await this.sermonRepository.update(sermon, updateSermonDto);

            return await this.findOne(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async remove(id: number) {
        const sermon = await this.findOne(id);

        if (sermon.error) {
            return sermon;
        }

        return await this.sermonRepository.delete(sermon);
    }
}
