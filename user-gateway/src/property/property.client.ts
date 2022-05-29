import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClient: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051',
      package: 'pp',
      protoPath: join(__dirname, './pp/pp.proto')
    }
}