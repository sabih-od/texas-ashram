import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column({type: 'text', nullable: true})
    file: string;

    @Column({type: 'text', nullable: true})
    image: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
