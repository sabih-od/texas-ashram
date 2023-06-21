import { DataSource } from 'typeorm';
import {PrayerRequest} from "./entities/prayer-request.entity";

export const prayerRequestProviders = [
    {
        provide: 'PRAYER_REQUEST_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(PrayerRequest),
        inject: ['DATA_SOURCE'],
    },
];
