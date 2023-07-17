import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Sermon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    title: string;

    @Column({ type: 'text', nullable: true })
    url: string;

    @Column({ type: 'text', nullable: true })
    media: string;

    @Column({ type: 'text', nullable: true })
    image: string;

    @Column({type: 'text', nullable: true})
    description: string;

    @Column({type: 'text', nullable: true})
    youtube_video_id: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
