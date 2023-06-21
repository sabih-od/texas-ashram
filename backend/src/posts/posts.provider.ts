import { DataSource } from 'typeorm';
import { Post } from "./entities/post.entity";

export const sermonProviders = [
    {
        provide: 'POST_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
        inject: ['DATA_SOURCE'],
    },
];
