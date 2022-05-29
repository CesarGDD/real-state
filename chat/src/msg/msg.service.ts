import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Msg } from './msg.entity';
import { Repository } from 'typeorm'
import { CreateMsgRequest, CreateMsgResponse, DeleteMsgRequest, DeleteMsgResponse, GetMsgRequest, GetMsgResponse, GetMsgsRequest, GetMsgsResponse } from 'chatpb/chatpb';
import  {v4 as uuid} from 'uuid';

@Injectable()
export class MsgService {
    constructor(@InjectRepository(Msg) private readonly msgRepository: Repository<Msg>){}

    async createMsg({chatId, content}:CreateMsgRequest):Promise<CreateMsgResponse>{
        const msg =  new Msg()
        const res = this.msgRepository.create({
            id: uuid(), 
            chatId, 
            content, 
            timestamp: Math.floor(Date.now() / 1000)})
        msg.id = res.id
        msg.chatId = res.chatId
        msg.content =  res.content
        msg.timestamp = res.timestamp
    return {msg}
    }
    async deleteMsg({id}:DeleteMsgRequest):Promise<DeleteMsgResponse>{
        const _res = this.msgRepository.delete({id})

    return {deleted: 'Success'}
    }
    async getMsg({id}:GetMsgRequest):Promise<GetMsgResponse>{
        const msg =  new Msg()
        const res = await this.msgRepository.findOne({id})
        msg.id = res.id
        msg.chatId = res.chatId
        msg.content =  res.content
        msg.timestamp = res.timestamp
    return {Msg: msg}
    }
    async getMsgs({id}:GetMsgsRequest):Promise<GetMsgsResponse>{
        let msgs =  new Array<Msg>()
        const res = await this.msgRepository.find({
            where: {chatId: id}
        })
        msgs = [...res]
    return {Msg: msgs}
    }
}
