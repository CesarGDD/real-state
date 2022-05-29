import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PropertyModule } from './property/property.module';
import { AgentModule } from './agent/agent.module';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    typePaths: ['./**/*.graphqls'],
    definitions: {
      path: join(process.cwd(), 'src/graph/graphql.ts')
    },
    driver: ApolloDriver,
    installSubscriptionHandlers: true
  }), PropertyModule, AgentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
