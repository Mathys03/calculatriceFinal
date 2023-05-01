import { Entity,BaseEntity, CreateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity('errors')
export class Errors extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:string;

    @CreateDateColumn()
    created_at : Date;
}