import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Errors } from './errors.entity';
import { ErrorsService } from './errors.service';

@Controller('errors')
export class ErrorsController {
    constructor(private readonly errorsService : ErrorsService){}

    @Get()
    getErrors(){
        return this.errorsService.getErrors();
    }
    @Post()
    createNewErrors(@Body('create_at') create_at:Date,):Promise<Errors>{
        return this.errorsService.createNewErrors(create_at);
    }
}

