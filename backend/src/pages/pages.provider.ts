import { DataSource } from 'typeorm';
import {Page} from "./entities/page.entity";

export const pageProviders = [
    {
        provide: 'PAGE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Page),
        inject: ['DATA_SOURCE'],
    },
];
