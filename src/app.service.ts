import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  async newCalcul(calcul:string):Promise<string>{
    return eval(calcul);
  }
}
