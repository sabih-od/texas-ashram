import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PrayerRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int', nullable: true})
    user_id: number

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

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
