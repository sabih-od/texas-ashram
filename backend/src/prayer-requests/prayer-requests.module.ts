import { Module } from '@nestjs/common';
import { PrayerRequestsService } from './prayer-requests.service';
import { PrayerRequestsController } from './prayer-requests.controller';
import {DatabaseModule} from "../database.module";
import {prayerRequestProviders} from "./prayer-requests.provider";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [DatabaseModule, AuthModule],
  controllers: [PrayerRequestsController],
  providers: [PrayerRequestsService, ...prayerRequestProviders],
    exports: [PrayerRequestsService],
})
export class PrayerRequestsModule {}
