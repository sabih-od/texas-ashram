import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import {DatabaseModule} from "../database.module";
import {announcementProviders} from "./announcements.provider";

@Module({
    imports: [DatabaseModule],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService, ...announcementProviders],
    exports: [AnnouncementsService],
})
export class AnnouncementsModule {}
