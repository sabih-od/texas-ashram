import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import {eventProviders} from "./events.Provider";
import {DatabaseModule} from "../database.module";
import {NotificationsModule} from "../notifications/notifications.module";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [DatabaseModule, NotificationsModule, UsersModule],
  controllers: [EventsController],
  providers: [...eventProviders, EventsService],
  exports: [EventsService],
})
export class EventsModule {}
