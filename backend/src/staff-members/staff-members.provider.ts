import { DataSource } from 'typeorm';
import {StaffMember} from "./entities/staff-member.entity";

export const staffMemberProviders = [
    {
        provide: 'STAFF_MEMBER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(StaffMember),
        inject: ['DATA_SOURCE'],
    },
];
