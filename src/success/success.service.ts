import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Success } from './success.entity';

@Injectable()
export class SuccessService {
    constructor(@InjectRepository(Success) private successRepository:Repository<Success>,){}

    async getSuccess(){
        const res = await this.successRepository.find();
        //  console.log('res is : ',res);
        var percent=0;
        var average=0;
        for(var i=0;i<res.length; i++){
            if(res[res.length-1].timeTakenMs>res[i].timeTakenMs) percent++;
            average+= res[i].timeTakenMs;
        }
        percent=(percent/(res.length-1))*100;
        var average=average/res.length;
        return [percent,average];
    } 

    async createNewSuccess(timeTakenMs:number):Promise<Success>{
        const success = new Success();
        success.timeTakenMs=timeTakenMs;
        await success.save();

        return success;
    }
}
