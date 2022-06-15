import { OnModuleInit } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription, ResolveField, Parent } from "@nestjs/graphql";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { PubSub } from "graphql-subscriptions";
import { Observable } from "rxjs";
import { grpcClient } from "./chat.client";
import { Chat, CreateChatRequest, CreateChatResponse, CreateMsgRequest, CreateMsgResponse, DeleteChatRequest, DeleteChatResponse, DeleteMsgRequest, DeleteMsgResponse, GetChatRequest, GetChatResponse, GetChatsRequest, GetChatsResponse, GetMsgRequest, GetMsgResponse, GetMsgsRequest, GetMsgsResponse, Msg } from "./chat/chatpb";


interface ChatService {
    CreateChat(request: CreateChatRequest): Observable<CreateChatResponse>;
    DeleteChat(request: DeleteChatRequest): Observable<DeleteChatResponse>;
    GetChat(request: GetChatRequest): Observable<GetChatResponse>;
    GetChats(request: GetChatsRequest): Observable<GetChatsResponse>;
    CreateMsg(request: CreateMsgRequest): Observable<CreateMsgResponse>;
    DeleteMsg(request: DeleteMsgRequest): Observable<DeleteMsgResponse>;
    GetMsg(request: GetMsgRequest): Observable<GetMsgResponse>;
    GetMsgs(request: GetMsgsRequest): Observable<GetMsgsResponse>;
}

const pubSub = new PubSub();

@Resolver()
export class ChatResolver implements OnModuleInit {
    @Client(grpcClient)
    private readonly svc: ClientGrpc
    private chatSvc: ChatService

    onModuleInit() {
        this.chatSvc = this.svc.getService<ChatService>('ChatService')
    }

    @Query('getChats')
    async getChats(
        @Args('id') id: number
    ): Promise<Chat[]> {
        console.log('getChats graphql');
        
        const {chat} = await this.chatSvc.GetChats({id}).toPromise()
        return chat
    }
    @Query('getChat')
    async getChat(
        @Args('id') id: string
    ): Promise<Chat> {
        console.log('getChat graphql');
        const {chat} = await this.chatSvc.GetChat({id}).toPromise()
        return chat
    }
    @Query('getMessage')
    async getMessage(
        @Args('id') id: string
    ): Promise<Msg> {
        console.log('getMsg graphql');
        const {Msg} = await this.chatSvc.GetMsg({id}).toPromise()
        return Msg
    }
    @Query('getMessages')
    async getMessages(
        @Args('id') id: string
    ): Promise<Msg[]> {
        console.log('getMsgs graphql');
        const {Msg} = await this.chatSvc.GetMsgs({id}).toPromise()
        return Msg
    }

    @Mutation('createChat')
    async createChat(
        @Args('input'){agentId, userId}:CreateChatRequest
    ):Promise<Chat>{
        console.log('createChat graphql');
        const {chat} = await this.chatSvc.CreateChat({agentId, userId}).toPromise()
        return chat
    }

    @Mutation('createMessage')
    async createMessage(
        @Args('input'){chatId, content, timestamp}:CreateMsgRequest
    ):Promise<Msg>{
        console.log('createMsg graphql');
        const {msg} = await this.chatSvc.CreateMsg({chatId, content, timestamp}).toPromise()
        pubSub.publish('newMessage', {newMessage: msg})
        return msg
    }
    
    @Subscription('newMessage', {
        filter: (payload, variables) => payload.newMessage.chat_id === variables.chat_id
    })
    newMessage(){
        return pubSub.asyncIterator('newMessage')
    }

    @ResolveField()
    async messages(@Parent() chat: Chat){
        return this.chatSvc.GetMsgs({id: chat.id})
    }
}