import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions} from '@nestjs/microservices'
import * as path from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const URL = 'localhost:50055'
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    options: {
      url: URL,
      package: 'chatpb',
      protoPath: path.resolve(__dirname, '../chatpb/chatpb.proto'),
    }
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen();
}
bootstrap();
