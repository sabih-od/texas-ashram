import { DataSource } from 'typeorm';
import { PageMedia } from "./entities/page-media.entity";

export const pageMediaProviders = [
    {
        provide: 'PAGE_MEDIA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(PageMedia),
        inject: ['DATA_SOURCE'],
    },
];
