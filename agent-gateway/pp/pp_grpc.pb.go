// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: pp.proto

package pp

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

// PropertysServiceClient is the client API for PropertysService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PropertysServiceClient interface {
	CreateProperty(ctx context.Context, in *CreatePropertyRequest, opts ...grpc.CallOption) (*CreatePropertyResponse, error)
	DeleteProperty(ctx context.Context, in *DeletePropertyRequest, opts ...grpc.CallOption) (*DeletePropertyResponse, error)
	GetPropertyById(ctx context.Context, in *GetPropertyByIdRequest, opts ...grpc.CallOption) (*GetPropertyByIdResponse, error)
	UpdateProperty(ctx context.Context, in *UpdatePropertyRequest, opts ...grpc.CallOption) (*UpdatePropertyResponse, error)
	ListProperty(ctx context.Context, in *ListPropertyRequest, opts ...grpc.CallOption) (*ListPropertyResponse, error)
	ListPropertyByAgent(ctx context.Context, in *ListPropertyByAgentIdRequest, opts ...grpc.CallOption) (*ListPropertyByAgentIdResponse, error)
}

type propertysServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPropertysServiceClient(cc grpc.ClientConnInterface) PropertysServiceClient {
	return &propertysServiceClient{cc}
}

func (c *propertysServiceClient) CreateProperty(ctx context.Context, in *CreatePropertyRequest, opts ...grpc.CallOption) (*CreatePropertyResponse, error) {
	out := new(CreatePropertyResponse)
	err := c.cc.Invoke(ctx, "/pp.PropertysService/CreateProperty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *propertysServiceClient) DeleteProperty(ctx context.Context, in *DeletePropertyRequest, opts ...grpc.CallOption) (*DeletePropertyResponse, error) {
	out := new(DeletePropertyResponse)
	err := c.cc.Invoke(ctx, "/pp.PropertysService/DeleteProperty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *propertysServiceClient) GetPropertyById(ctx context.Context, in *GetPropertyByIdRequest, opts ...grpc.CallOption) (*GetPropertyByIdResponse, error) {
	out := new(GetPropertyByIdResponse)
	err := c.cc.Invoke(ctx, "/pp.PropertysService/GetPropertyById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *propertysServiceClient) UpdateProperty(ctx context.Context, in *UpdatePropertyRequest, opts ...grpc.CallOption) (*UpdatePropertyResponse, error) {
	out := new(UpdatePropertyResponse)
	err := c.cc.Invoke(ctx, "/pp.PropertysService/UpdateProperty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *propertysServiceClient) ListProperty(ctx context.Context, in *ListPropertyRequest, opts ...grpc.CallOption) (*ListPropertyResponse, error) {
	out := new(ListPropertyResponse)
	err := c.cc.Invoke(ctx, "/pp.PropertysService/ListProperty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *propertysServiceClient) ListPropertyByAgent(ctx context.Context, in *ListPropertyByAgentIdRequest, opts ...grpc.CallOption) (*ListPropertyByAgentIdResponse, error) {
	out := new(ListPropertyByAgentIdResponse)
	err := c.cc.Invoke(ctx, "/pp.PropertysService/ListPropertyByAgent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PropertysServiceServer is the server API for PropertysService service.
// All implementations must embed UnimplementedPropertysServiceServer
// for forward compatibility
type PropertysServiceServer interface {
	CreateProperty(context.Context, *CreatePropertyRequest) (*CreatePropertyResponse, error)
	DeleteProperty(context.Context, *DeletePropertyRequest) (*DeletePropertyResponse, error)
	GetPropertyById(context.Context, *GetPropertyByIdRequest) (*GetPropertyByIdResponse, error)
	UpdateProperty(context.Context, *UpdatePropertyRequest) (*UpdatePropertyResponse, error)
	ListProperty(context.Context, *ListPropertyRequest) (*ListPropertyResponse, error)
	ListPropertyByAgent(context.Context, *ListPropertyByAgentIdRequest) (*ListPropertyByAgentIdResponse, error)
	mustEmbedUnimplementedPropertysServiceServer()
}

// UnimplementedPropertysServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPropertysServiceServer struct {
}

func (UnimplementedPropertysServiceServer) CreateProperty(context.Context, *CreatePropertyRequest) (*CreatePropertyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProperty not implemented")
}
func (UnimplementedPropertysServiceServer) DeleteProperty(context.Context, *DeletePropertyRequest) (*DeletePropertyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteProperty not implemented")
}
func (UnimplementedPropertysServiceServer) GetPropertyById(context.Context, *GetPropertyByIdRequest) (*GetPropertyByIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPropertyById not implemented")
}
func (UnimplementedPropertysServiceServer) UpdateProperty(context.Context, *UpdatePropertyRequest) (*UpdatePropertyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProperty not implemented")
}
func (UnimplementedPropertysServiceServer) ListProperty(context.Context, *ListPropertyRequest) (*ListPropertyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListProperty not implemented")
}
func (UnimplementedPropertysServiceServer) ListPropertyByAgent(context.Context, *ListPropertyByAgentIdRequest) (*ListPropertyByAgentIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPropertyByAgent not implemented")
}
func (UnimplementedPropertysServiceServer) mustEmbedUnimplementedPropertysServiceServer() {}

// UnsafePropertysServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PropertysServiceServer will
// result in compilation errors.
type UnsafePropertysServiceServer interface {
	mustEmbedUnimplementedPropertysServiceServer()
}

func RegisterPropertysServiceServer(s grpc.ServiceRegistrar, srv PropertysServiceServer) {
	s.RegisterService(&PropertysService_ServiceDesc, srv)
}

func _PropertysService_CreateProperty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePropertyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PropertysServiceServer).CreateProperty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pp.PropertysService/CreateProperty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PropertysServiceServer).CreateProperty(ctx, req.(*CreatePropertyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PropertysService_DeleteProperty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePropertyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PropertysServiceServer).DeleteProperty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pp.PropertysService/DeleteProperty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PropertysServiceServer).DeleteProperty(ctx, req.(*DeletePropertyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PropertysService_GetPropertyById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPropertyByIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PropertysServiceServer).GetPropertyById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pp.PropertysService/GetPropertyById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PropertysServiceServer).GetPropertyById(ctx, req.(*GetPropertyByIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PropertysService_UpdateProperty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePropertyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PropertysServiceServer).UpdateProperty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pp.PropertysService/UpdateProperty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PropertysServiceServer).UpdateProperty(ctx, req.(*UpdatePropertyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PropertysService_ListProperty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPropertyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PropertysServiceServer).ListProperty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pp.PropertysService/ListProperty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PropertysServiceServer).ListProperty(ctx, req.(*ListPropertyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PropertysService_ListPropertyByAgent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPropertyByAgentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PropertysServiceServer).ListPropertyByAgent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pp.PropertysService/ListPropertyByAgent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PropertysServiceServer).ListPropertyByAgent(ctx, req.(*ListPropertyByAgentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PropertysService_ServiceDesc is the grpc.ServiceDesc for PropertysService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PropertysService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pp.PropertysService",
	HandlerType: (*PropertysServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateProperty",
			Handler:    _PropertysService_CreateProperty_Handler,
		},
		{
			MethodName: "DeleteProperty",
			Handler:    _PropertysService_DeleteProperty_Handler,
		},
		{
			MethodName: "GetPropertyById",
			Handler:    _PropertysService_GetPropertyById_Handler,
		},
		{
			MethodName: "UpdateProperty",
			Handler:    _PropertysService_UpdateProperty_Handler,
		},
		{
			MethodName: "ListProperty",
			Handler:    _PropertysService_ListProperty_Handler,
		},
		{
			MethodName: "ListPropertyByAgent",
			Handler:    _PropertysService_ListPropertyByAgent_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pp.proto",
}
