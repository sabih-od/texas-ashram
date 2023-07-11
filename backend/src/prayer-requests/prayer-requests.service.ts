import {Inject, Injectable} from '@nestjs/common';
import { CreatePrayerRequestDto } from './dto/create-prayer-request.dto';
import { UpdatePrayerRequestDto } from './dto/update-prayer-request.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {PrayerRequest} from "./entities/prayer-request.entity";

@Injectable()
export class PrayerRequestsService {
    constructor(
        @Inject('PRAYER_REQUEST_REPOSITORY')
        private prayerRequestRepository: Repository<PrayerRequest>,
    ) {}

  async create(createPrayerRequestDto: CreatePrayerRequestDto): Promise<any> {
      try {
          const prayer_request = await this.prayerRequestRepository.create(createPrayerRequestDto);

          await this.prayerRequestRepository.save(prayer_request);

          return await this.findOne(prayer_request.id);
      } catch (error) {
          if (error instanceof QueryFailedError) {
              return {
                  error: error['sqlMessage']
              };
          }
      }
  }

  async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {id: 'DESC'}}): Promise<any> {
      const [data, total] = await this.prayerRequestRepository.findAndCount({
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
          return await this.prayerRequestRepository.findOneOrFail({
              where: {
                  id: id
              }
          });
      } catch (error) {
          if (error instanceof EntityNotFoundError) {
              return {
                  error: 'Prayer Request Not Found'
              };
          }
      }
  }

  async findOneByUserId(user_id: number): Promise<any> {
      try {
          return await this.prayerRequestRepository.find({
              where: {
                  user_id: user_id
              }
          });
      } catch (error) {
          if (error instanceof EntityNotFoundError) {
              return {
                  error: 'Prayer Request Not Found'
              };
          }
      }
  }

  async update(id: number, updatePrayerRequestDto: UpdatePrayerRequestDto): Promise<any> {
      try {
          const prayer_request = await this.findOne(id);

          if (prayer_request.error) {
              return prayer_request;
          }

          await this.prayerRequestRepository.update(prayer_request, updatePrayerRequestDto);

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
      const prayer_request = await this.findOne(id);

      if (prayer_request.error) {
          return prayer_request;
      }

      return await this.prayerRequestRepository.delete(prayer_request.id);
  }
}
