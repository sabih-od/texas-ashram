import { Module } from '@nestjs/common';
import { StaffMembersService } from './staff-members.service';
import { StaffMembersController } from './staff-members.controller';
import {DatabaseModule} from "../database.module";
import {staffMemberProviders} from "./staff-members.provider";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, UsersModule],
  controllers: [StaffMembersController],
  providers: [StaffMembersService, ...staffMemberProviders],
    exports: [StaffMembersService]
})
export class StaffMembersModule {}
