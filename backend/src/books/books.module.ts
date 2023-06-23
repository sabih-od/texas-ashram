import {Module} from '@nestjs/common';
import {BooksService} from './books.service';
import {BooksController} from './books.controller';
import {DatabaseModule} from "../database.module";
import {bookProviders} from "./books.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [BooksController],
    providers: [...bookProviders, BooksService],
    exports: [BooksService],
})
export class BooksModule {}
