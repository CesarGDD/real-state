import { grpcClient } from './property.client';
import { OnModuleInit } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { ClientGrpc, Client } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { 
    GetPropertyByIdRequest,
    GetPropertyByIdResponse,
    ListPropertyRequest,
    ListPropertyResponse,
    ListPropertyByAgentIdRequest,
    ListPropertyByAgentIdResponse,
    Property
} from 'src/property/pp/pp';

interface PropertysService {
    GetPropertyById(request: GetPropertyByIdRequest): Observable<GetPropertyByIdResponse>;
    ListProperty(request: ListPropertyRequest): Observable<ListPropertyResponse>;
    ListPropertyByAgent(request: ListPropertyByAgentIdRequest): Observable<ListPropertyByAgentIdResponse>;
  }

@Resolver()
export class PropertyResolver implements OnModuleInit{
    @Client(grpcClient)
    private readonly svc: ClientGrpc
    private propertySvc: PropertysService

    onModuleInit() {
        this.propertySvc = this.svc.getService<PropertysService>('PropertysService')
    }
    @Query('property')
    async getProperty(
        @Args('property_id') property_id: number
    ):Promise<Property>{
        const {property} = await this.propertySvc.GetPropertyById({propertyId: property_id}).toPromise()
        return property
    }

    @Query('listProperty')
    async getPropertys(req):Promise<Property[]>{
        const {property} = await this.propertySvc.ListProperty(req).toPromise()
        return property
    }

    @Query('listPropertyByAgent')
    async getPropertysByAgent(
        @Args('agent_id') agent_id: number
    ):Promise<Property[]>{
        const {Property} = await this.propertySvc.ListPropertyByAgent({agentId: agent_id}).toPromise()
        return Property
    }
}