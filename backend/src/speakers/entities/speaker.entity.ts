import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Speaker {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    designation: string;

    @Column('text')
    description: string;

    @Column({ type: 'text', nullable: true })
    image: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
