import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Success } from './success.entity';
import { SuccessService } from './success.service';

@Controller('success')
export class SuccessController {
    constructor(private readonly successService : SuccessService){}

    @Get()
    getSuccess(){
        console.log('get all success');
        return this.successService.getSuccess();
    }
    @Post()
    createNewSuccess(@Body('timeTakenMs') timeTakenMs:number,):Promise<Success>{
        return this.successService.createNewSuccess(timeTakenMs);
    }
}
