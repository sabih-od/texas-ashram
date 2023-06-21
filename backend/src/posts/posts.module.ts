import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {DatabaseModule} from "../database.module";
import {sermonProviders} from "./posts.provider";

@Module({
    imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [...sermonProviders, PostsService],
    exports: [PostsService]
})
export class PostsModule {}
