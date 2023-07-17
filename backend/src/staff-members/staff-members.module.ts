import { Module } from '@nestjs/common';
import { StaffMembersService } from './staff-members.service';
import { StaffMembersController } from './staff-members.controller';
import {DatabaseModule} from "../database.module";
import {staffMemberProviders} from "./staff-members.provider";

@Module({
    imports: [DatabaseModule],
  controllers: [StaffMembersController],
  providers: [StaffMembersService, ...staffMemberProviders],
    exports: [StaffMembersService]
})
export class StaffMembersModule {}
