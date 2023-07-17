import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column({ type: 'text'})
    description: string;

    @Column('varchar')
    date_to: string;

    @Column('varchar')
    date_from: string;

    @Column({ type: 'text', nullable: true })
    location: string;

    @Column({ type: 'text', nullable: true})
    image: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
