import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import {DatabaseModule} from "../database.module";
import {announcementProviders} from "./announcements.provider";
import {NotificationsModule} from "../notifications/notifications.module";

@Module({
    imports: [DatabaseModule, NotificationsModule],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService, ...announcementProviders],
    exports: [AnnouncementsService],
})
export class AnnouncementsModule {}
