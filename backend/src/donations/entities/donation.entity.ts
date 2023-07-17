import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Donation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int', nullable: true})
    user_id: number

    @Column({type: 'varchar', nullable: true})
    name: string;

    @Column({type: 'varchar'})
    amount: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
