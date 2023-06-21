import { Module } from '@nestjs/common';
import { PrayerRequestsService } from './prayer-requests.service';
import { PrayerRequestsController } from './prayer-requests.controller';
import {DatabaseModule} from "../database.module";
import {prayerRequestProviders} from "./prayer-requests.provider";

@Module({
    imports: [DatabaseModule],
  controllers: [PrayerRequestsController],
  providers: [PrayerRequestsService, ...prayerRequestProviders],
    exports: [PrayerRequestsService],
})
export class PrayerRequestsModule {}
