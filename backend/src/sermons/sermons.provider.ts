import { DataSource } from 'typeorm';
import { Sermon } from "./entities/sermon.entity";

export const sermonProviders = [
    {
        provide: 'SERMON_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Sermon),
        inject: ['DATA_SOURCE'],
    },
];
