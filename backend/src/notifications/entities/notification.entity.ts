import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', default: process.env.APP_URL + ':' + process.env.PORT + "/images/logo.png"})
    icon: string;

    @Column({type: 'int', default: 0})
    user_id: number;

    @Column({type: 'varchar', nullable: true})
    title: string;

    @Column({type: 'text', nullable: true})
    content: string;

    @Column({type: 'text', nullable: true})
    topic: string;

    @Column({type: 'int', nullable: true})
    topic_id: number;

    @Column({type: 'varchar', nullable: true})
    created_at: string;
}
