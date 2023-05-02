import { Injectable } from '@nestjs/common';
import { Errors } from './errors.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ErrorsService {
    constructor(@InjectRepository(Errors) private errorsRepository:Repository<Errors>,){}

    async getErrors(){
        const res = await this.errorsRepository.find();
        return [res.length,res[res.length-1].created_at];
    } 

    async createNewErrors(created_at:Date):Promise<Errors>{
        const errors = new Errors();
        errors.created_at=created_at;
        await errors.save();
        return errors;
    }
}
