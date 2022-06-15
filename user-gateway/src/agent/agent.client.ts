import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClient: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: process.env.AGENT_ADDRESS,
      package: 'ag',
      protoPath: join(__dirname, './ag/ag.proto')
    }
}