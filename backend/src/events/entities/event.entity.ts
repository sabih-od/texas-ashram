import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', nullable: true })
    date_to: string;

    @Column({ type: 'varchar', nullable: true })
    date_from: string;

    @Column({ type: 'text', nullable: true })
    start_time: string;

    @Column({ type: 'text', nullable: true })
    end_time: string;

    @Column({ type: 'text', nullable: true })
    location: string;

    @Column({ type: 'text', nullable: true})
    image: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
