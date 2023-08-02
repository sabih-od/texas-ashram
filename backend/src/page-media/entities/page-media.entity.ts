import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PageMedia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    media: string;

    @Column({ type: 'text' })
    created_at: string;
}
