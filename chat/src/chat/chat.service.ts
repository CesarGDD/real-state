import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { Chat } from './chat.entity';
import { Repository } from 'typeorm';
import { CreateChatRequest, CreateChatResponse, DeleteChatRequest, DeleteChatResponse, GetChatRequest, GetChatResponse, GetChatsRequest, GetChatsResponse } from 'src/chatpb/chatpb';
import  {v4 as uuid} from 'uuid';

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(Chat) private readonly chatRepository: Repository<Chat>
    ){}

    async createChat({agentId, userId}:CreateChatRequest):Promise<CreateChatResponse>{
        const chat = new Chat()
        const res = this.chatRepository.create({
            agentId, 
            userId, 
            id:uuid()})
        chat.id = res.id
        chat.agentId = res.agentId
        chat.userId = res.userId
        return {chat}
    }

    async deleteChat({id}:DeleteChatRequest):Promise<DeleteChatResponse>{
        this.chatRepository.delete({id})
        return {deleted: "Success"}
    }

    async getChat({id}:GetChatRequest):Promise<GetChatResponse>{
        const chat = new Chat()
        const res = await this.chatRepository.findOne({id})
        chat.id = res.id
        chat.agentId = res.agentId
        chat.userId = res.userId
        return {chat}
    }

    async getChats({id}:GetChatsRequest):Promise<GetChatsResponse>{
        let chats = new Array<Chat>()
        const res = await this.chatRepository.find({
            where: { 
                $or: [{userId: id}, {agentId: id}]
            },
        })
        chats = [...res]
        return {chat: chats}
    }
}
