import { Module, forwardRef } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import {DatabaseModule} from "../database.module";
import {groupProviders} from "./groups.provider";
import {MessagesModule} from "../messages/messages.module";

@Module({
    imports: [DatabaseModule, MessagesModule],
  controllers: [GroupsController],
  providers: [GroupsService, ...groupProviders],
    exports: [GroupsService],
})
export class GroupsModule {}
