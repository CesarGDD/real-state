import { Controller } from '@nestjs/common';
import { MsgService } from './msg.service';
import {GrpcMethod} from '@nestjs/microservices';
import { CreateMsgRequest, CreateMsgResponse, DeleteMsgRequest, DeleteMsgResponse, GetMsgRequest, GetMsgResponse, GetMsgsRequest, GetMsgsResponse } from 'chatpb/chatpb';

@Controller('msg')
export class MsgController {
    constructor(private msgSvc: MsgService){}

    @GrpcMethod('MsgService', 'CreateMsg')
    createMsg(req: CreateMsgRequest): Promise<CreateMsgResponse>{
        console.log('Create Msg gRPC');
        return this.msgSvc.createMsg(req)
    }
    deleteMsg(req: DeleteMsgRequest): Promise<DeleteMsgResponse>{
        console.log('Delete Msg gRPC');
        return this.msgSvc.deleteMsg(req)
    }
    getMsg(req: GetMsgRequest): Promise<GetMsgResponse>{
        console.log('Get Msg gRPC');
        return this.msgSvc.getMsg(req)
    }
    getMsgs(req: GetMsgsRequest): Promise<GetMsgsResponse>{
        console.log('Get Mssg gRPC');
        return this.msgSvc.getMsgs(req)
    }
}
