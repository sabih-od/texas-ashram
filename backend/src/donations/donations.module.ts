import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import {DatabaseModule} from "../database/database.module";
import {donationProviders} from "./donations.provider";
import {AuthModule} from "../auth/auth.module";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [DonationsController],
  providers: [DonationsService, ...donationProviders]
})
export class DonationsModule {}
