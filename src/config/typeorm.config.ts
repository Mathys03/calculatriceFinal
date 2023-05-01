import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Errors } from "src/errors/errors.entity";
import { Success } from "src/success/success.entity";

export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'cir2calculatrice',
    entities: [Success,Errors],
    synchronize: true,
}