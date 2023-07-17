import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {DatabaseModule} from "../database.module";
import {sermonProviders} from "./posts.provider";
import {NotificationsModule} from "../notifications/notifications.module";

@Module({
    imports: [DatabaseModule, NotificationsModule],
  controllers: [PostsController],
  providers: [...sermonProviders, PostsService],
    exports: [PostsService]
})
export class PostsModule {}
