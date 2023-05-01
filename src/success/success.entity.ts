import { Entity,BaseEntity, CreateDateColumn, Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity('success')
export class Success extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    timeTakenMs : number;
}