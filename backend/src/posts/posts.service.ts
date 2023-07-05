import {Inject, Injectable} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Post} from "./entities/post.entity";

@Injectable()
export class PostsService {
    constructor(
        @Inject('POST_REPOSITORY')
        private postRepository: Repository<Post>,
    ) {}
  async create(createPostDto: CreatePostDto): Promise<any> {
      try {
          const post = await this.postRepository.create(createPostDto);

          await this.postRepository.save(post);

          return await this.findOne(post.id);
      } catch (error) {
          if (error instanceof QueryFailedError) {
              return {
                  error: error['sqlMessage']
              };
          }
      }
  }

  async findAll(page: number = 1, limit: number = 10, query_object: {} = {order: {id: 'DESC'}}): Promise<any> {
      const [data, total] = await this.postRepository.findAndCount({
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
          return await this.postRepository.findOneOrFail({
              where: {
                  id: id
              }
          });
      } catch (error) {
          if (error instanceof EntityNotFoundError) {
              return {
                  error: 'Post Not Found'
              };
          }
      }
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<any> {
      try {
          const post = await this.findOne(id);

          if (post.error) {
              return post;
          }

          await this.postRepository.update(post, updatePostDto);

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
      const post = await this.findOne(id);

      if (post.error) {
          return post;
      }

      return await this.postRepository.delete(post);
  }
}
