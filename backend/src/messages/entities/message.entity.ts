import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int', nullable: true})
    group_id: number;

    @Column({type: 'int', nullable: true})
    user_id: number;

    @Column({type: 'text', nullable: true})
    message: string;

    @Column({type: 'varchar', nullable: true})
    blocked_at: string;

    @Column({type: 'varchar', nullable: true})
    created_at: string;
}
