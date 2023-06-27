import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Page {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column({ type: 'text', nullable: true })
    content: string;
}
