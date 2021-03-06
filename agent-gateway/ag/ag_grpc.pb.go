// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: ag.proto

package ag

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// AgentsServiceClient is the client API for AgentsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AgentsServiceClient interface {
	CreateAgent(ctx context.Context, in *CreateAgentRequest, opts ...grpc.CallOption) (*CreateAgentResponse, error)
	DeleteAgent(ctx context.Context, in *DeleteAgentRequest, opts ...grpc.CallOption) (*DeleteAgentResponse, error)
	GetAgentById(ctx context.Context, in *GetAgentByIdRequest, opts ...grpc.CallOption) (*GetAgentByIdResponse, error)
	UpdateAgent(ctx context.Context, in *UpdateAgentRequest, opts ...grpc.CallOption) (*UpdateAgentResponse, error)
	ListAgent(ctx context.Context, in *ListAgentRequest, opts ...grpc.CallOption) (*ListAgentResponse, error)
}

type agentsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAgentsServiceClient(cc grpc.ClientConnInterface) AgentsServiceClient {
	return &agentsServiceClient{cc}
}

func (c *agentsServiceClient) CreateAgent(ctx context.Context, in *CreateAgentRequest, opts ...grpc.CallOption) (*CreateAgentResponse, error) {
	out := new(CreateAgentResponse)
	err := c.cc.Invoke(ctx, "/ag.AgentsService/CreateAgent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *agentsServiceClient) DeleteAgent(ctx context.Context, in *DeleteAgentRequest, opts ...grpc.CallOption) (*DeleteAgentResponse, error) {
	out := new(DeleteAgentResponse)
	err := c.cc.Invoke(ctx, "/ag.AgentsService/DeleteAgent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *agentsServiceClient) GetAgentById(ctx context.Context, in *GetAgentByIdRequest, opts ...grpc.CallOption) (*GetAgentByIdResponse, error) {
	out := new(GetAgentByIdResponse)
	err := c.cc.Invoke(ctx, "/ag.AgentsService/GetAgentById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *agentsServiceClient) UpdateAgent(ctx context.Context, in *UpdateAgentRequest, opts ...grpc.CallOption) (*UpdateAgentResponse, error) {
	out := new(UpdateAgentResponse)
	err := c.cc.Invoke(ctx, "/ag.AgentsService/UpdateAgent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *agentsServiceClient) ListAgent(ctx context.Context, in *ListAgentRequest, opts ...grpc.CallOption) (*ListAgentResponse, error) {
	out := new(ListAgentResponse)
	err := c.cc.Invoke(ctx, "/ag.AgentsService/ListAgent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AgentsServiceServer is the server API for AgentsService service.
// All implementations must embed UnimplementedAgentsServiceServer
// for forward compatibility
type AgentsServiceServer interface {
	CreateAgent(context.Context, *CreateAgentRequest) (*CreateAgentResponse, error)
	DeleteAgent(context.Context, *DeleteAgentRequest) (*DeleteAgentResponse, error)
	GetAgentById(context.Context, *GetAgentByIdRequest) (*GetAgentByIdResponse, error)
	UpdateAgent(context.Context, *UpdateAgentRequest) (*UpdateAgentResponse, error)
	ListAgent(context.Context, *ListAgentRequest) (*ListAgentResponse, error)
	mustEmbedUnimplementedAgentsServiceServer()
}

// UnimplementedAgentsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAgentsServiceServer struct {
}

func (UnimplementedAgentsServiceServer) CreateAgent(context.Context, *CreateAgentRequest) (*CreateAgentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAgent not implemented")
}
func (UnimplementedAgentsServiceServer) DeleteAgent(context.Context, *DeleteAgentRequest) (*DeleteAgentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAgent not implemented")
}
func (UnimplementedAgentsServiceServer) GetAgentById(context.Context, *GetAgentByIdRequest) (*GetAgentByIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAgentById not implemented")
}
func (UnimplementedAgentsServiceServer) UpdateAgent(context.Context, *UpdateAgentRequest) (*UpdateAgentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateAgent not implemented")
}
func (UnimplementedAgentsServiceServer) ListAgent(context.Context, *ListAgentRequest) (*ListAgentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAgent not implemented")
}
func (UnimplementedAgentsServiceServer) mustEmbedUnimplementedAgentsServiceServer() {}

// UnsafeAgentsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AgentsServiceServer will
// result in compilation errors.
type UnsafeAgentsServiceServer interface {
	mustEmbedUnimplementedAgentsServiceServer()
}

func RegisterAgentsServiceServer(s grpc.ServiceRegistrar, srv AgentsServiceServer) {
	s.RegisterService(&AgentsService_ServiceDesc, srv)
}

func _AgentsService_CreateAgent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateAgentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AgentsServiceServer).CreateAgent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ag.AgentsService/CreateAgent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AgentsServiceServer).CreateAgent(ctx, req.(*CreateAgentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AgentsService_DeleteAgent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteAgentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AgentsServiceServer).DeleteAgent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ag.AgentsService/DeleteAgent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AgentsServiceServer).DeleteAgent(ctx, req.(*DeleteAgentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AgentsService_GetAgentById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAgentByIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AgentsServiceServer).GetAgentById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ag.AgentsService/GetAgentById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AgentsServiceServer).GetAgentById(ctx, req.(*GetAgentByIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AgentsService_UpdateAgent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateAgentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AgentsServiceServer).UpdateAgent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ag.AgentsService/UpdateAgent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AgentsServiceServer).UpdateAgent(ctx, req.(*UpdateAgentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AgentsService_ListAgent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAgentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AgentsServiceServer).ListAgent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ag.AgentsService/ListAgent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AgentsServiceServer).ListAgent(ctx, req.(*ListAgentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AgentsService_ServiceDesc is the grpc.ServiceDesc for AgentsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AgentsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ag.AgentsService",
	HandlerType: (*AgentsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateAgent",
			Handler:    _AgentsService_CreateAgent_Handler,
		},
		{
			MethodName: "DeleteAgent",
			Handler:    _AgentsService_DeleteAgent_Handler,
		},
		{
			MethodName: "GetAgentById",
			Handler:    _AgentsService_GetAgentById_Handler,
		},
		{
			MethodName: "UpdateAgent",
			Handler:    _AgentsService_UpdateAgent_Handler,
		},
		{
			MethodName: "ListAgent",
			Handler:    _AgentsService_ListAgent_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ag.proto",
}
