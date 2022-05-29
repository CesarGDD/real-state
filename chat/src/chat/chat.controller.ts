import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import {GrpcMethod} from '@nestjs/microservices';
import { CreateChatRequest, CreateChatResponse, DeleteChatRequest, DeleteChatResponse, GetChatRequest, GetChatResponse, GetChatsRequest, GetChatsResponse } from 'chatpb/chatpb';

@Controller('chat')
export class ChatController {
    constructor(private chatSvc: ChatService){}
    @GrpcMethod('ChatService', 'CreateChat')
    createChat(req: CreateChatRequest):Promise<CreateChatResponse>{
        console.log('Create chat gRPC')
        return this.chatSvc.createChat(req)
    }
    @GrpcMethod('ChatService', 'DeleteChat')
    deleteChat(req: DeleteChatRequest):Promise<DeleteChatResponse>{
        console.log('Delete chat gRPC')
        return this.chatSvc.deleteChat(req)
    }
    @GrpcMethod('ChatService', 'GetChat')
    getChat(req: GetChatRequest):Promise<GetChatResponse>{
        console.log('Get chat gRPC')
        return this.chatSvc.getChat(req)
    }
    @GrpcMethod('ChatService', 'GetChats')
    getChats(req: GetChatsRequest):Promise<GetChatsResponse>{
        console.log('Get chast gRPC')
        return this.chatSvc.getChats(req)
    }
}
