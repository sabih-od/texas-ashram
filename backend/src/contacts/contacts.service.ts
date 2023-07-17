import {Inject, Injectable} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Contact} from "./entities/contact.entity";

@Injectable()
export class ContactsService {
    constructor(
        @Inject('CONTACT_REPOSITORY')
        private contactRepository: Repository<Contact>,
    ) {}

    async create(createContactDto: CreateContactDto): Promise<any> {
        try {
            const contact = await this.contactRepository.create(createContactDto);

            await this.contactRepository.save(contact);

            return await this.findOne(contact.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        const [data, total] = await this.contactRepository.findAndCount({
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
            return await this.contactRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Contact Not Found'
                };
            }
        }
    }

    async update(id: number, updateContactDto: UpdateContactDto): Promise<any> {
        try {
            const contact = await this.findOne(id);

            if (contact.error) {
                return contact;
            }

            await this.contactRepository.update(contact.id, updateContactDto);

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
        const contact = await this.findOne(id);

        if (contact.error) {
            return contact;
        }

        return await this.contactRepository.delete(contact.id);
    }
}
