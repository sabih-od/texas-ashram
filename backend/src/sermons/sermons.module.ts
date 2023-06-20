import { Module } from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { SermonsController } from './sermons.controller';
import {DatabaseModule} from "../database.module";
import {sermonProviders} from "./sermons.provider";

@Module({
    imports: [DatabaseModule],
  controllers: [SermonsController],
  providers: [...sermonProviders, SermonsService],
    exports: [SermonsService]
})
export class SermonsModule {}
