import {Inject, Injectable} from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Notification} from "./entities/notification.entity";

@Injectable()
export class NotificationsService {
    constructor(
        @Inject('NOTIFICATION_REPOSITORY')
        private notificationRepository: Repository<Notification>,
    ) {}

    async create(createNotificationDto: CreateNotificationDto): Promise<any> {
        try {
            const notification = await this.notificationRepository.create(createNotificationDto);

            await this.notificationRepository.save(notification);

            return await this.findOne(notification.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        const [data, total] = await this.notificationRepository.findAndCount({
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
            return await this.notificationRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Notification Not Found'
                };
            }
        }
    }

    async update(id: number, updateNotificationDto: UpdateNotificationDto): Promise<any> {
        try {
            const notification = await this.findOne(id);

            if (notification.error) {
                return notification;
            }

            await this.notificationRepository.update(notification.id, updateNotificationDto);

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
        const notification = await this.findOne(id);

        if (notification.error) {
            return notification;
        }

        return await this.notificationRepository.delete(notification.id);
    }
}
