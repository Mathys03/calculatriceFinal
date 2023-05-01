import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Success } from './success.entity';

@Injectable()
export class SuccessService {
    constructor(@InjectRepository(Success) private successRepository:Repository<Success>,){}

    async getSuccess(){
        const res = await this.successRepository.find();
        console.log('res is : ',res);
        return res;
    } 

    async createNewSuccess(timeTakenMs:number):Promise<Success>{
        const success = new Success();
        success.timeTakenMs=timeTakenMs;
        await success.save();

        return success;
    }
}
