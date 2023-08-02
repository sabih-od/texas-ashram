import {Inject, Injectable} from '@nestjs/common';
import { CreatePageMediaDto } from './dto/create-page-media.dto';
import { UpdatePageMediaDto } from './dto/update-page-media.dto';
import {QueryFailedError, Repository} from "typeorm";
import {PageMedia} from "./entities/page-media.entity";

@Injectable()
export class PageMediaService {
  constructor(
      @Inject('PAGE_MEDIA_REPOSITORY')
      private pageMediaRepository: Repository<PageMedia>,
  ) {}

  async create(createPageMediaDto: CreatePageMediaDto): Promise<any> {
    try {
      const page_media = await this.pageMediaRepository.create(createPageMediaDto);

      await this.pageMediaRepository.save(page_media);

      return page_media;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        return {
          error: error['sqlMessage']
        };
      }
    }
  }

  findAll() {
    return `This action returns all pageMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pageMedia`;
  }

  update(id: number, updatePageMediaDto: UpdatePageMediaDto) {
    return `This action updates a #${id} pageMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} pageMedia`;
  }
}
