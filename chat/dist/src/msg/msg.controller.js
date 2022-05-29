"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgController = void 0;
const common_1 = require("@nestjs/common");
const msg_service_1 = require("./msg.service");
const microservices_1 = require("@nestjs/microservices");
const chatpb_1 = require("../../chatpb/chatpb");
let MsgController = class MsgController {
    constructor(msgSvc) {
        this.msgSvc = msgSvc;
    }
    createMsg(req) {
        console.log('Create Msg gRPC');
        return this.msgSvc.createMsg(req);
    }
    deleteMsg(req) {
        console.log('Delete Msg gRPC');
        return this.msgSvc.deleteMsg(req);
    }
    getMsg(req) {
        console.log('Get Msg gRPC');
        return this.msgSvc.getMsg(req);
    }
    getMsgs(req) {
        console.log('Get Mssg gRPC');
        return this.msgSvc.getMsgs(req);
    }
};
__decorate([
    (0, microservices_1.GrpcMethod)('MsgService', 'CreateMsg'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MsgController.prototype, "createMsg", null);
MsgController = __decorate([
    (0, common_1.Controller)('msg'),
    __metadata("design:paramtypes", [msg_service_1.MsgService])
], MsgController);
exports.MsgController = MsgController;
//# sourceMappingURL=msg.controller.js.map