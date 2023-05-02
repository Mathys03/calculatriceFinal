import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';
import { Table } from 'typeorm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  newCalcul(@Body('calcul') calcul:string,@Body('timeTakenMs') timeTakenMs:number,){
    var tmpResponse;
    const resultat =this.appService.newCalcul(calcul);
    resultat.then(resultat => {
      console.log("nice");
      axios.post('http://localhost:3000/success', {"timeTakenMs": timeTakenMs});
      setTimeout(()=>{
        axios.get('http://localhost:3000/success').then(response =>tmpResponse = response.data);
      },2000); //attente pour que le post ait le temps d'être envoyé
    }).catch(erreur => {
      console.error("erreur");
      axios.post('http://localhost:3000/errors', {"created_at": "0"});
      setTimeout(()=>{
        axios.get('http://localhost:3000/errors').then(response =>tmpResponse = response.data);
      },2000);
    });
    setTimeout(()=>{
      console.log(tmpResponse);
      return tmpResponse;
    },2100)
  }
}
