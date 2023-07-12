import {Inject, Injectable} from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Donation} from "./entities/donation.entity";

@Injectable()
export class DonationsService {
    constructor(
        @Inject('DONATION_REPOSITORY')
        private donationRepository: Repository<Donation>,
    ) {}

    async create(createDonationDto: CreateDonationDto): Promise<any> {
        try {
            const donation = await this.donationRepository.create(createDonationDto);

            await this.donationRepository.save(donation);

            return await this.findOne(donation.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        const [data, total] = await this.donationRepository.findAndCount({
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
            return await this.donationRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Donation Not Found'
                };
            }
        }
    }

    async update(id: number, updateDonationDto: UpdateDonationDto): Promise<any> {
        try {
            const donation = await this.findOne(id);

            if (donation.error) {
                return donation;
            }

            await this.donationRepository.update(donation.id, updateDonationDto);

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
        const donation = await this.findOne(id);

        if (donation.error) {
            return donation;
        }

        return await this.donationRepository.delete(donation.id);
    }
}
