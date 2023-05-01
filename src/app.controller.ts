import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  newCalcul(@Body('calcul') calcul:string,@Body('timeTakenMs') timeTakenMs:number,):Promise<string>{
    const resultat =this.appService.newCalcul(calcul);
    resultat.then(resultat => {
      console.log("nice");
      axios.post('http://localhost:3000/success', {"timeTakenMs": timeTakenMs});
    }).catch(erreur => {
      console.error("erreur");
      axios.post('http://localhost:3000/errors', {"created_at": "0"});
    });
    return resultat;
  }
}
