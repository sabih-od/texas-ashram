import {Inject, Injectable} from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Announcement} from "./entities/announcement.entity";

@Injectable()
export class AnnouncementsService {
    constructor(
        @Inject('ANNOUNCEMENT_REPOSITORY')
        private announcementRepository: Repository<Announcement>,
    ) {}

  async create(createAnnouncementDto: CreateAnnouncementDto): Promise<any> {
      try {
          const announcement = await this.announcementRepository.create(createAnnouncementDto);

          await this.announcementRepository.save(announcement);

          return await this.findOne(announcement.id);
      } catch (error) {
          if (error instanceof QueryFailedError) {
              return {
                  error: error['sqlMessage']
              };
          }
      }
  }

  async findAll(page: number = 1, limit: number = 10): Promise<any> {
      const [data, total] = await this.announcementRepository.findAndCount({
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
          return await this.announcementRepository.findOneOrFail({
              where: {
                  id: id
              }
          });
      } catch (error) {
          if (error instanceof EntityNotFoundError) {
              return {
                  error: 'Announcement Not Found'
              };
          }
      }
  }

  async update(id: number, updateAnnouncementDto: UpdateAnnouncementDto): Promise<any> {
      try {
          const announcement = await this.findOne(id);

          if (announcement.error) {
              return announcement;
          }

          await this.announcementRepository.update(announcement, updateAnnouncementDto);

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
      const announcement = await this.findOne(id);

      if (announcement.error) {
          return announcement;
      }

      return await this.announcementRepository.delete(announcement);
  }
}
