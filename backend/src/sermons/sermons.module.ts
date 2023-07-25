import { Module } from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { SermonsController } from './sermons.controller';
import {DatabaseModule} from "../database.module";
import {sermonProviders} from "./sermons.provider";
import {NotificationsModule} from "../notifications/notifications.module";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, NotificationsModule, UsersModule],
  controllers: [SermonsController],
  providers: [...sermonProviders, SermonsService],
    exports: [SermonsService]
})
export class SermonsModule {}
