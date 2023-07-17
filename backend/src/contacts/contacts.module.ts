import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import {DatabaseModule} from "../database.module";
import {contactProviders} from "./contacts.provider";

@Module({
    imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [ContactsService, ...contactProviders],
    exports: [ContactsService],
})
export class ContactsModule {}
