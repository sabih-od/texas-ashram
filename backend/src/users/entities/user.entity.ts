import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import {Group} from "../../groups/entities/group.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    first_name: string;

    @Column('text')
    last_name: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({type: 'varchar', nullable: true})
    phone: string;

    @Column('text')
    password: string;

    @Column({ type: 'int', default: 2 })
    role_id: number;

    @Column({ type: 'text', nullable: true})
    profile_picture: string;

    @Column({ type: 'text', nullable: true})
    otp: string;

    @Column({ type: 'text', nullable: true})
    otp_expires_at: string;

    @Column({type: 'varchar', nullable: true})
    blocked_at: string;

    @Column({type: 'text', nullable: true})
    fcm_token: string;

    @Column({ type: 'text', nullable: true })
    blocked_users: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;

    // //relations
    // @ManyToMany(() => Group, (group) => group.members)
    // @JoinTable({name: 'group_users'})
    // groups: Group[];
}
