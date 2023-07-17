import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: true})
    name: string;

    @Column('varchar')
    email: string;

    @Column({type: 'varchar', nullable: true})
    phone: string;

    @Column({type: 'varchar', nullable: true})
    company: string;

    @Column({type: 'text', nullable: true})
    message: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
