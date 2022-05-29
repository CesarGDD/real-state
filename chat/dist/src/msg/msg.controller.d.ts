import { MsgService } from './msg.service';
import { CreateMsgRequest, CreateMsgResponse, DeleteMsgRequest, DeleteMsgResponse, GetMsgRequest, GetMsgResponse, GetMsgsRequest, GetMsgsResponse } from 'chatpb/chatpb';
export declare class MsgController {
    private msgSvc;
    constructor(msgSvc: MsgService);
    createMsg(req: CreateMsgRequest): Promise<CreateMsgResponse>;
    deleteMsg(req: DeleteMsgRequest): Promise<DeleteMsgResponse>;
    getMsg(req: GetMsgRequest): Promise<GetMsgResponse>;
    getMsgs(req: GetMsgsRequest): Promise<GetMsgsResponse>;
}
