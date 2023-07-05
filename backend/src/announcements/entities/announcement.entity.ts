import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Announcement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    description: string;

    @Column('varchar')
    date: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
