import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class GroupRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int', nullable: true})
    user_id: number;

    @Column({type: 'int', nullable: true})
    group_id: number;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
