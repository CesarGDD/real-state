import { Chat } from './chat.entity';
import { Repository } from 'typeorm';
import { CreateChatRequest, CreateChatResponse, DeleteChatRequest, DeleteChatResponse, GetChatRequest, GetChatResponse, GetChatsRequest, GetChatsResponse } from 'chatpb/chatpb';
export declare class ChatService {
    private readonly chatRepository;
    constructor(chatRepository: Repository<Chat>);
    createChat({ agentId, userId }: CreateChatRequest): Promise<CreateChatResponse>;
    deleteChat({ id }: DeleteChatRequest): Promise<DeleteChatResponse>;
    getChat({ id }: GetChatRequest): Promise<GetChatResponse>;
    getChats({ id }: GetChatsRequest): Promise<GetChatsResponse>;
}
