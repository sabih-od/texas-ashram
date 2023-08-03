import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({type: 'int', nullable: true})
    // user_id: number;

    @Column({ type: 'varchar', nullable: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    default_icon: string;

    @Column({ type: 'text', nullable: true })
    last_message: string;

    @Column({ type: 'varchar', nullable: true })
    last_updated: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;

    @Column({ type: 'text', nullable: true })
    members: string;

    // //relations
    // @ManyToMany(() => User, (user) => user.groups)
    // @JoinTable({name: 'group_users'})
    // members: User[];
}
