import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccessModule } from './success/success.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ErrorsModule } from './errors/errors.module';

@Module({
  imports: [SuccessModule, TypeOrmModule.forRoot(typeOrmConfig), ErrorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
