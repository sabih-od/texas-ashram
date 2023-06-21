import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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

    @Column('varchar')
    phone: string;

    @Column('text')
    password: string;

    @Column({ type: 'int', default: 2 })
    role_id: number;

    @Column({ type: 'text', nullable: true})
    profile_picture: number;
}
