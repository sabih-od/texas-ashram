import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {DatabaseModule} from "../database/database.module";
import {sermonProviders} from "./posts.provider";
import {NotificationsModule} from "../notifications/notifications.module";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, NotificationsModule, UsersModule],
  controllers: [PostsController],
  providers: [...sermonProviders, PostsService],
    exports: [PostsService]
})
export class PostsModule {}
