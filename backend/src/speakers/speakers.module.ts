import { Module } from '@nestjs/common';
import { SpeakersService } from './speakers.service';
import { SpeakersController } from './speakers.controller';
import {DatabaseModule} from "../database.module";
import {speakerProviders} from "./speakers.provider";

@Module({
    imports: [DatabaseModule],
  controllers: [SpeakersController],
  providers: [SpeakersService, ...speakerProviders],
    exports: [SpeakersService]
})
export class SpeakersModule {}
