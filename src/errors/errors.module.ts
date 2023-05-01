import { Module } from '@nestjs/common';
import { ErrorsController } from './errors.controller';
import { ErrorsService } from './errors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Errors } from './errors.entity';

@Module({
  controllers: [ErrorsController],
  imports : [TypeOrmModule.forFeature([Errors])],
  providers: [ErrorsService]
})
export class ErrorsModule {}
