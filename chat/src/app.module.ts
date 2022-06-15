import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { MsgModule } from './msg/msg.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Chat } from './chat/chat.entity';
import { Msg } from './msg/msg.entity'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url: process.env.MONGO_URL,
    synchronize: true,
    useUnifiedTopology: true,
    entities: [
      Chat, Msg
    ]
  }),ChatModule, MsgModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
