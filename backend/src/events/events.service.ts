import {Inject, Injectable} from '@nestjs/common';
import {CreateEventDto} from './dto/create-event.dto';
import {UpdateEventDto} from './dto/update-event.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Event} from "./entities/event.entity";

@Injectable()
export class EventsService {
    constructor(
        @Inject('EVENT_REPOSITORY')
        private eventRepository: Repository<Event>,
    ) {
    }

    async create(createEventDto: CreateEventDto): Promise<any> {
        try {
            const event = await this.eventRepository.create({
                title: createEventDto.title,
                description: createEventDto.description,
                date_to: createEventDto.date_to,
                date_from: createEventDto.date_from,
                location: createEventDto.location,
                image: createEventDto.image,
            });

            await this.eventRepository.save(event);

            return await this.findOne(event.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {
        const [data, total] = await this.eventRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
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
            return await this.eventRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Event Not Found'
                };
            }
        }
    }

    async update(id: number, updateEventDto: UpdateEventDto): Promise<any> {
        try {
            const event = await this.findOne(id);

            if (event.error) {
                return event;
            }

            await this.eventRepository.update(event, updateEventDto);

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
        const event = await this.findOne(id);

        if (event.error) {
            return event;
        }

        return await this.eventRepository.delete(event);
    }
}
