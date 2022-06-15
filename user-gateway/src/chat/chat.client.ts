import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClient: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: process.env.CHAT_ADDRESS,
      package: 'chatpb',
      protoPath: join(__dirname, './chat/chatpb.proto')
    }
}