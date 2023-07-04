import {forwardRef, Module} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import {messageProviders} from "./messages.provider";
import {DatabaseModule} from "../database.module";
import {GroupsModule} from "../groups/groups.module";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, forwardRef(() => GroupsModule), UsersModule],
  controllers: [MessagesController],
  providers: [MessagesService, ...messageProviders],
    exports: [MessagesService],
})
export class MessagesModule {}
