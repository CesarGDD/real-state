import { Msg } from './msg.entity';
import { Repository } from 'typeorm';
import { CreateMsgRequest, CreateMsgResponse, DeleteMsgRequest, DeleteMsgResponse, GetMsgRequest, GetMsgResponse, GetMsgsRequest, GetMsgsResponse } from 'chatpb/chatpb';
export declare class MsgService {
    private readonly msgRepository;
    constructor(msgRepository: Repository<Msg>);
    createMsg({ chatId, content }: CreateMsgRequest): Promise<CreateMsgResponse>;
    deleteMsg({ id }: DeleteMsgRequest): Promise<DeleteMsgResponse>;
    getMsg({ id }: GetMsgRequest): Promise<GetMsgResponse>;
    getMsgs({ id }: GetMsgsRequest): Promise<GetMsgsResponse>;
}
