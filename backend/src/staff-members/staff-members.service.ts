import {Inject, Injectable} from '@nestjs/common';
import { CreateStaffMemberDto } from './dto/create-staff-member.dto';
import { UpdateStaffMemberDto } from './dto/update-staff-member.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {StaffMember} from "./entities/staff-member.entity";

@Injectable()
export class StaffMembersService {
    constructor(
        @Inject('STAFF_MEMBER_REPOSITORY')
        private staffMemberRepository: Repository<StaffMember>,
    ) {}

    async create(createStaffMemberDto: CreateStaffMemberDto): Promise<any> {
        try {
            const staff_member = await this.staffMemberRepository.create(createStaffMemberDto);

            await this.staffMemberRepository.save(staff_member);

            return await this.findOne(staff_member.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        const [data, total] = await this.staffMemberRepository.findAndCount({
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
            return await this.staffMemberRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Staff Member Not Found'
                };
            }
        }
    }

    async update(id: number, updateStaffMemberDto: UpdateStaffMemberDto): Promise<any> {
        try {
            const staff_member = await this.findOne(id);

            if (staff_member.error) {
                return staff_member;
            }

            await this.staffMemberRepository.update(staff_member, updateStaffMemberDto);

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
        const staff_member = await this.findOne(id);

        if (staff_member.error) {
            return staff_member;
        }

        return await this.staffMemberRepository.delete(staff_member.id);
    }
}
