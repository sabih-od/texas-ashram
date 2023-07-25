import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import {DatabaseModule} from "../database.module";
import {reportProviders} from "./reports.provider";
import {MessagesModule} from "../messages/messages.module";
import {AuthModule} from "../auth/auth.module";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, MessagesModule, AuthModule, UsersModule],
  controllers: [ReportsController],
  providers: [ReportsService, ...reportProviders],
    exports: [ReportsService],
})
export class ReportsModule {}
