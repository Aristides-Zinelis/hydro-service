import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class River {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    countrySource: string;

    @Column()
    length: string;

    @Column()
    photo: string;
}