import {forwardRef, Module} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import {DatabaseModule} from "../database.module";
import {notificationProviders} from "./notifications.provider";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [DatabaseModule, AuthModule],
  controllers: [NotificationsController],
  providers: [NotificationsService, ...notificationProviders],
    exports: [NotificationsService],
})
export class NotificationsModule {}
