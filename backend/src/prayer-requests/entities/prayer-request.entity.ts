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

    @Column({type: 'varchar', nullable: true})
    contact: string;

    @Column({type: 'varchar', nullable: true})
    start_date: string;

    @Column({type: 'varchar', nullable: true})
    end_date: string;

    @Column({type: 'varchar', nullable: true})
    time: string;

    @Column('text')
    description: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
