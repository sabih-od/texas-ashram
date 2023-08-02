import {Module} from '@nestjs/common';
import {PageMediaService} from './page-media.service';
import {PageMediaController} from './page-media.controller';
import {pageMediaProviders} from './page-media.provider'
import {DatabaseModule} from "../database/database.module";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, UsersModule],
    controllers: [PageMediaController],
    providers: [...pageMediaProviders, PageMediaService],
    exports: [PageMediaService]
})
export class PageMediaModule {
}
