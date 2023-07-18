import {Inject, Injectable} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Report} from "./entities/report.entity";

@Injectable()
export class ReportsService {
    constructor(
        @Inject('REPORT_REPOSITORY')
        private reportRepository: Repository<Report>,
    ) {}

    async create(createReportDto: CreateReportDto): Promise<any> {
        try {
            const report = await this.reportRepository.create(createReportDto);

            await this.reportRepository.save(report);

            return await this.findOne(report.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {id: 'DESC'}}): Promise<any> {
        const [data, total] = await this.reportRepository.findAndCount({
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
            return await this.reportRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Report Not Found'
                };
            }
        }
    }

    async update(id: number, updateReportDto: UpdateReportDto): Promise<any> {
        try {
            const report = await this.findOne(id);

            if (report.error) {
                return report;
            }

            await this.reportRepository.update(report.id, updateReportDto);

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
        const report = await this.findOne(id);

        if (report.error) {
            return report;
        }

        return await this.reportRepository.delete(report.id);
    }
}
