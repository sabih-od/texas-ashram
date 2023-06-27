import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PrayerRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    contact: string;

    @Column('varchar')
    start_date: string;

    @Column('varchar')
    end_date: string;

    @Column('varchar')
    time: string;

    @Column('text')
    description: string;
}