import { DataSource } from 'typeorm';
import {Speaker} from "./entities/speaker.entity";

export const speakerProviders = [
    {
        provide: 'SPEAKER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Speaker),
        inject: ['DATA_SOURCE'],
    },
];
