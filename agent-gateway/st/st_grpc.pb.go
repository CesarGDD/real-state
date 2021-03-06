// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: st.proto

package st

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

// PhotoServiceClient is the client API for PhotoService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PhotoServiceClient interface {
	UploadPhoto(ctx context.Context, opts ...grpc.CallOption) (PhotoService_UploadPhotoClient, error)
	DeletePhoto(ctx context.Context, in *DeletePhotoRequest, opts ...grpc.CallOption) (*DeletePhotoResponse, error)
	ListPhotos(ctx context.Context, in *ListPhotosRequest, opts ...grpc.CallOption) (*ListPhotosResponse, error)
}

type photoServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPhotoServiceClient(cc grpc.ClientConnInterface) PhotoServiceClient {
	return &photoServiceClient{cc}
}

func (c *photoServiceClient) UploadPhoto(ctx context.Context, opts ...grpc.CallOption) (PhotoService_UploadPhotoClient, error) {
	stream, err := c.cc.NewStream(ctx, &PhotoService_ServiceDesc.Streams[0], "/st.PhotoService/UploadPhoto", opts...)
	if err != nil {
		return nil, err
	}
	x := &photoServiceUploadPhotoClient{stream}
	return x, nil
}

type PhotoService_UploadPhotoClient interface {
	Send(*UploadPhotoRequest) error
	CloseAndRecv() (*UploadPhotoResponse, error)
	grpc.ClientStream
}

type photoServiceUploadPhotoClient struct {
	grpc.ClientStream
}

func (x *photoServiceUploadPhotoClient) Send(m *UploadPhotoRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *photoServiceUploadPhotoClient) CloseAndRecv() (*UploadPhotoResponse, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(UploadPhotoResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *photoServiceClient) DeletePhoto(ctx context.Context, in *DeletePhotoRequest, opts ...grpc.CallOption) (*DeletePhotoResponse, error) {
	out := new(DeletePhotoResponse)
	err := c.cc.Invoke(ctx, "/st.PhotoService/DeletePhoto", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *photoServiceClient) ListPhotos(ctx context.Context, in *ListPhotosRequest, opts ...grpc.CallOption) (*ListPhotosResponse, error) {
	out := new(ListPhotosResponse)
	err := c.cc.Invoke(ctx, "/st.PhotoService/ListPhotos", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PhotoServiceServer is the server API for PhotoService service.
// All implementations must embed UnimplementedPhotoServiceServer
// for forward compatibility
type PhotoServiceServer interface {
	UploadPhoto(PhotoService_UploadPhotoServer) error
	DeletePhoto(context.Context, *DeletePhotoRequest) (*DeletePhotoResponse, error)
	ListPhotos(context.Context, *ListPhotosRequest) (*ListPhotosResponse, error)
	mustEmbedUnimplementedPhotoServiceServer()
}

// UnimplementedPhotoServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPhotoServiceServer struct {
}

func (UnimplementedPhotoServiceServer) UploadPhoto(PhotoService_UploadPhotoServer) error {
	return status.Errorf(codes.Unimplemented, "method UploadPhoto not implemented")
}
func (UnimplementedPhotoServiceServer) DeletePhoto(context.Context, *DeletePhotoRequest) (*DeletePhotoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePhoto not implemented")
}
func (UnimplementedPhotoServiceServer) ListPhotos(context.Context, *ListPhotosRequest) (*ListPhotosResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPhotos not implemented")
}
func (UnimplementedPhotoServiceServer) mustEmbedUnimplementedPhotoServiceServer() {}

// UnsafePhotoServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PhotoServiceServer will
// result in compilation errors.
type UnsafePhotoServiceServer interface {
	mustEmbedUnimplementedPhotoServiceServer()
}

func RegisterPhotoServiceServer(s grpc.ServiceRegistrar, srv PhotoServiceServer) {
	s.RegisterService(&PhotoService_ServiceDesc, srv)
}

func _PhotoService_UploadPhoto_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(PhotoServiceServer).UploadPhoto(&photoServiceUploadPhotoServer{stream})
}

type PhotoService_UploadPhotoServer interface {
	SendAndClose(*UploadPhotoResponse) error
	Recv() (*UploadPhotoRequest, error)
	grpc.ServerStream
}

type photoServiceUploadPhotoServer struct {
	grpc.ServerStream
}

func (x *photoServiceUploadPhotoServer) SendAndClose(m *UploadPhotoResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *photoServiceUploadPhotoServer) Recv() (*UploadPhotoRequest, error) {
	m := new(UploadPhotoRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _PhotoService_DeletePhoto_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePhotoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PhotoServiceServer).DeletePhoto(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/st.PhotoService/DeletePhoto",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PhotoServiceServer).DeletePhoto(ctx, req.(*DeletePhotoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PhotoService_ListPhotos_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPhotosRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PhotoServiceServer).ListPhotos(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/st.PhotoService/ListPhotos",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PhotoServiceServer).ListPhotos(ctx, req.(*ListPhotosRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PhotoService_ServiceDesc is the grpc.ServiceDesc for PhotoService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PhotoService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "st.PhotoService",
	HandlerType: (*PhotoServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DeletePhoto",
			Handler:    _PhotoService_DeletePhoto_Handler,
		},
		{
			MethodName: "ListPhotos",
			Handler:    _PhotoService_ListPhotos_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "UploadPhoto",
			Handler:       _PhotoService_UploadPhoto_Handler,
			ClientStreams: true,
		},
	},
	Metadata: "st.proto",
}
