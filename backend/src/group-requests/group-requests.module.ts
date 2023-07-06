import { Module } from '@nestjs/common';
import { GroupRequestsService } from './group-requests.service';
import { GroupRequestsController } from './group-requests.controller';
import {DatabaseModule} from "../database.module";
import {groupRequestProviders} from "./group-requests.provider";
import {GroupsModule} from "../groups/groups.module";
import {UsersModule} from "../users/users.module";
import {groupProviders} from "../groups/groups.provider";

@Module({
    imports: [DatabaseModule, GroupsModule, UsersModule],
  controllers: [GroupRequestsController],
  providers: [GroupRequestsService, ...groupRequestProviders, ...groupProviders],
    exports: [GroupRequestsService],
})
export class GroupRequestsModule {}
