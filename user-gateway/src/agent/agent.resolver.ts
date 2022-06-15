import { OnModuleInit } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Agent, GetAgentByIdRequest, GetAgentByIdResponse, ListAgentRequest, ListAgentResponse } from './ag/ag';
import { grpcClient } from './agent.client';

interface AgentService {
  GetAgentById(request: GetAgentByIdRequest): Observable<GetAgentByIdResponse>;
  ListAgent(request: ListAgentRequest): Observable<ListAgentResponse>;
}

@Resolver()
export class AgentResolver implements OnModuleInit {
  @Client(grpcClient)
  private readonly svc: ClientGrpc;
  private agentSvc: AgentService;

  onModuleInit() {
      this.agentSvc = this.svc.getService<AgentService>('AgentsService')
  }

  @Query('agent')
  async getAgent(
      @Args('agent_id') agent_id: number
  ):Promise<Agent> {
      const {agent} = await this.agentSvc.GetAgentById({agentId:agent_id}).toPromise()
      return agent
  }
  @Query('listAgent')
  async getAgents(req):Promise<Agent[]>{
      console.log('listAgent graphql nest')
      const {agent} = await this.agentSvc.ListAgent(req).toPromise()
      return agent
  }
}
