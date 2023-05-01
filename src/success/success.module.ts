import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Success } from './success.entity';
import { SuccessController } from './success.controller';
import { SuccessService } from './success.service';

@Module({
  controllers: [SuccessController],
  imports : [TypeOrmModule.forFeature([Success])],
  providers: [SuccessService]
})
export class SuccessModule {}
