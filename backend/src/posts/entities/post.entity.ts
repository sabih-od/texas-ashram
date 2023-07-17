import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    title: string;

    @Column({ type: 'text', nullable: true })
    content: string;

    @Column({ type: 'text', nullable: true })
    media: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
