import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices'
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const URL = '0.0.0.0:50055'
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: URL,
      package: 'chatpb',
      protoPath: join(__dirname, './chatpb/chatpb.proto'),
    }
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen();
}
bootstrap();
