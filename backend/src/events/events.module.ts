import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import {eventProviders} from "./events.Provider";
import {DatabaseModule} from "../database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [EventsController],
  providers: [...eventProviders, EventsService],
  exports: [EventsService],
})
export class EventsModule {}
