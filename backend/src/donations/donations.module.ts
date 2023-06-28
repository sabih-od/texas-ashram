import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import {DatabaseModule} from "../database.module";
import {donationProviders} from "./donations.provider";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [DatabaseModule, AuthModule],
  controllers: [DonationsController],
  providers: [DonationsService, ...donationProviders]
})
export class DonationsModule {}
