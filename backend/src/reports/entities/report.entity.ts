import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int'})
    user_id: number

    @Column('text')
    module: string;

    @Column({type: 'int'})
    module_id: number

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
