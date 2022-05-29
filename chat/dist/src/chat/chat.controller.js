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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const microservices_1 = require("@nestjs/microservices");
const chatpb_1 = require("../../chatpb/chatpb");
let ChatController = class ChatController {
    constructor(chatSvc) {
        this.chatSvc = chatSvc;
    }
    createChat(req) {
        console.log('Create chat gRPC');
        return this.chatSvc.createChat(req);
    }
    deleteChat(req) {
        console.log('Delete chat gRPC');
        return this.chatSvc.deleteChat(req);
    }
    getChat(req) {
        console.log('Get chat gRPC');
        return this.chatSvc.getChat(req);
    }
    getChats(req) {
        console.log('Get chast gRPC');
        return this.chatSvc.getChats(req);
    }
};
__decorate([
    (0, microservices_1.GrpcMethod)('ChatService', 'CreateChat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createChat", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ChatService', 'DeleteChat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteChat", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ChatService', 'GetChat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getChat", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ChatService', 'GetChats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getChats", null);
ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map