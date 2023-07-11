import {Inject, Injectable} from '@nestjs/common';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Speaker} from "./entities/speaker.entity";

@Injectable()
export class SpeakersService {
    constructor(
        @Inject('SPEAKER_REPOSITORY')
        private speakerRepository: Repository<Speaker>,
    ) {}

    async create(createSpeakerDto: CreateSpeakerDto): Promise<any> {
        try {
            const speaker = await this.speakerRepository.create(createSpeakerDto);

            await this.speakerRepository.save(speaker);

            return await this.findOne(speaker.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        const [data, total] = await this.speakerRepository.findAndCount({
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
            return await this.speakerRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Speaker Not Found'
                };
            }
        }
    }

    async update(id: number, updateSpeakerDto: UpdateSpeakerDto): Promise<any> {
        try {
            const speaker = await this.findOne(id);

            if (speaker.error) {
                return speaker;
            }

            await this.speakerRepository.update(speaker, updateSpeakerDto);

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
        const speaker = await this.findOne(id);

        if (speaker.error) {
            return speaker;
        }

        return await this.speakerRepository.delete(speaker.id);
    }
}
