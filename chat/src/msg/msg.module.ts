import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MsgService } from './msg.service';
import { MsgController } from './msg.controller';
import { Msg } from './msg.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Msg])],
  providers: [MsgService],
  controllers: [MsgController]
})
export class MsgModule {}
