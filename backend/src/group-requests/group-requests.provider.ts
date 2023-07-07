import { DataSource } from 'typeorm';
import {GroupRequest} from "./entities/group-request.entity";

export const groupRequestProviders = [
    {
        provide: 'GROUP_REQUEST_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(GroupRequest),
        inject: ['DATA_SOURCE'],
    },
];
