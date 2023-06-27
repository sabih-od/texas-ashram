import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import {DatabaseModule} from "../database.module";
import {pageProviders} from "./pages.provider";

@Module({
    imports: [DatabaseModule],
  controllers: [PagesController],
  providers: [PagesService, ...pageProviders],
  exports: [PagesService],
})
export class PagesModule {}
