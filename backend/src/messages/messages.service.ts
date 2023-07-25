import {Inject, Injectable} from '@nestjs/common';
import {CreateMessageDto} from './dto/create-message.dto';
import {UpdateMessageDto} from './dto/update-message.dto';
import {EntityNotFoundError, IsNull, QueryFailedError, Repository} from "typeorm";
import {Message} from "./entities/message.entity";
import {User} from "../users/entities/user.entity";
import {GroupsService} from "../groups/groups.service";

@Injectable()
export class MessagesService {
    constructor(
        @Inject('MESSAGE_REPOSITORY')
        private messageRepository: Repository<Message>,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private groupService: GroupsService,
    ) {}

    async create(createMessageDto: CreateMessageDto): Promise<any> {
        try {
            const message = await this.messageRepository.create(createMessageDto);

            await this.messageRepository.save(message);

            return await this.findOne(message.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object = {}, withGroupMembers = false, group_id = null): Promise<any> {
        let [data, total] = await this.messageRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                created_at: 'DESC'
            },
            ...query_object
        });

        //populate user object in place of user_id
        let enrichedData = await Promise.all(
            data.map(async (message) => {
                const user = await this.userRepository.findOne({
                    where: {
                        id: message.user_id,
                        blocked_at: IsNull()
                    }
                });

                if (user && user.id) {
                    delete user.password;
                    delete user.otp;
                    delete user.email;
                    delete user.phone;
                    delete user.role_id;
                    delete user.blocked_users;
                    delete user.created_at;

                    return { ...message, user };
                } else {
                    total -= 1;
                }
            }),
        );

        // Remove null entries from the array
        enrichedData = enrichedData.filter((entry) => entry !== null && entry !== undefined);

        const totalPages = Math.ceil(total / limit);

        let members = null;
        if (withGroupMembers && group_id) {
            let group = await this.groupService.findOne(+group_id);

            if (!group.error) {
                if (group.members != null && group.members != "" && group.members != "[]") {
                    members = JSON.parse(group.members);
                } else {
                    members = null;
                }
            }
        }

        return {
            data: enrichedData,
            total,
            members,
            currentPage: page,
            totalPages,
        };
    }

    async findOne(id: number): Promise<any> {
        try {
            let message = await this.messageRepository.findOneOrFail({
                where: {
                    id: id
                }
            });

            let user = await this.userRepository.findOneOrFail({
                where: {
                    id: message.user_id
                }
            });

            delete message.user_id;
            if (user.id) {
                delete user.password;
                delete user.otp;
                delete user.email;
                delete user.phone;
                delete user.role_id;
                delete user.created_at;
            }

            let new_message = {
                user: user
            };

            return {
                ...message,
                ...new_message
            };
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Message Not Found'
                };
            }
        }
    }

    async update(id: number, updateMessageDto: UpdateMessageDto): Promise<any> {
        try {
            const message = await this.findOne(id);

            if (message.error) {
                return message;
            }

            await this.messageRepository.update(message.id, updateMessageDto);

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
        const message = await this.findOne(id);

        if (message.error) {
            return message;
        }

        return await this.messageRepository.delete(message.id);
    }
}
