import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class StaffMember {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column({ type: 'text', nullable: true })
    image: string;
}
