import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClient: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: process.env.PROPERTY_ADDRESS,
      package: 'pp',
      protoPath: join(__dirname, './pp/pp.proto')
    }
}