import { ChatService } from './chat.service';
import { CreateChatRequest, CreateChatResponse, DeleteChatRequest, DeleteChatResponse, GetChatRequest, GetChatResponse, GetChatsRequest, GetChatsResponse } from 'chatpb/chatpb';
export declare class ChatController {
    private chatSvc;
    constructor(chatSvc: ChatService);
    createChat(req: CreateChatRequest): Promise<CreateChatResponse>;
    deleteChat(req: DeleteChatRequest): Promise<DeleteChatResponse>;
    getChat(req: GetChatRequest): Promise<GetChatResponse>;
    getChats(req: GetChatsRequest): Promise<GetChatsResponse>;
}
