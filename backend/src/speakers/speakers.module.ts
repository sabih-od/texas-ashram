import { Module } from '@nestjs/common';
import { SpeakersService } from './speakers.service';
import { SpeakersController } from './speakers.controller';
import {DatabaseModule} from "../database/database.module";
import {speakerProviders} from "./speakers.provider";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, UsersModule],
  controllers: [SpeakersController],
  providers: [SpeakersService, ...speakerProviders],
    exports: [SpeakersService]
})
export class SpeakersModule {}
