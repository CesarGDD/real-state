// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: st.proto

package st

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Photo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PhotoId    int32  `protobuf:"varint,1,opt,name=photo_id,json=photoId,proto3" json:"photo_id,omitempty"`
	Url        string `protobuf:"bytes,2,opt,name=url,proto3" json:"url,omitempty"`
	PropertyId int32  `protobuf:"varint,3,opt,name=property_id,json=propertyId,proto3" json:"property_id,omitempty"`
}

func (x *Photo) Reset() {
	*x = Photo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_st_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Photo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Photo) ProtoMessage() {}

func (x *Photo) ProtoReflect() protoreflect.Message {
	mi := &file_st_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Photo.ProtoReflect.Descriptor instead.
func (*Photo) Descriptor() ([]byte, []int) {
	return file_st_proto_rawDescGZIP(), []int{0}
}

func (x *Photo) GetPhotoId() int32 {
	if x != nil {
		return x.PhotoId
	}
	return 0
}

func (x *Photo) GetUrl() string {
	if x != nil {
		return x.Url
	}
	return ""
}

func (x *Photo) GetPropertyId() int32 {
	if x != nil {
		return x.PropertyId
	}
	return 0
}

type File struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Content     []byte `protobuf:"bytes,1,opt,name=content,proto3" json:"content,omitempty"`
	FileName    string `protobuf:"bytes,2,opt,name=fileName,proto3" json:"fileName,omitempty"`
	Size        int64  `protobuf:"varint,3,opt,name=size,proto3" json:"size,omitempty"`
	ContentType string `protobuf:"bytes,4,opt,name=contentType,proto3" json:"contentType,omitempty"`
}

func (x *File) Reset() {
	*x = File{}
	if protoimpl.UnsafeEnabled {
		mi := &file_st_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *File) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*File) ProtoMessage() {}

func (x *File) ProtoReflect() protoreflect.Message {
	mi := &file_st_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use File.ProtoReflect.Descriptor instead.
func (*File) Descriptor() ([]byte, []int) {
	return file_st_proto_rawDescGZIP(), []int{1}
}

func (x *File) GetContent() []byte {
	if x != nil {
		return x.Content
	}
	return nil
}

func (x *File) GetFileName() string {
	if x != nil {
		return x.FileName
	}
	return ""
}

func (x *File) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *File) GetContentType() string {
	if x != nil {
		return x.ContentType
	}
	return ""
}

type UploadPhotoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Photo *Photo `protobuf:"bytes,1,opt,name=photo,proto3" json:"photo,omitempty"`
	File  *File  `protobuf:"bytes,2,opt,name=file,proto3" json:"file,omitempty"`
}

func (x *UploadPhotoRequest) Reset() {
	*x = UploadPhotoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_st_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadPhotoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadPhotoRequest) ProtoMessage() {}

func (x *UploadPhotoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_st_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadPhotoRequest.ProtoReflect.Descriptor instead.
func (*UploadPhotoRequest) Descriptor() ([]byte, []int) {
	return file_st_proto_rawDescGZIP(), []int{2}
}

func (x *UploadPhotoRequest) GetPhoto() *Photo {
	if x != nil {
		return x.Photo
	}
	return nil
}

func (x *UploadPhotoRequest) GetFile() *File {
	if x != nil {
		return x.File
	}
	return nil
}

type UploadPhotoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Photo *Photo `protobuf:"bytes,1,opt,name=photo,proto3" json:"photo,omitempty"`
}

func (x *UploadPhotoResponse) Reset() {
	*x = UploadPhotoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_st_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadPhotoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadPhotoResponse) ProtoMessage() {}

func (x *UploadPhotoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_st_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadPhotoResponse.ProtoReflect.Descriptor instead.
func (*UploadPhotoResponse) Descriptor() ([]byte, []int) {
	return file_st_proto_rawDescGZIP(), []int{3}
}

func (x *UploadPhotoResponse) GetPhoto() *Photo {
	if x != nil {
		return x.Photo
	}
	return nil
}

type DeletePhotoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PhotoId int32 `protobuf:"varint,1,opt,name=photo_id,json=photoId,proto3" json:"photo_id,omitempty"`
}

func (x *DeletePhotoRequest) Reset() {
	*x = DeletePhotoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_st_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeletePhotoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeletePhotoRequest) ProtoMessage() {}

func (x *DeletePhotoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_st_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeletePhotoRequest.ProtoReflect.Descriptor instead.
func (*DeletePhotoRequest) Descriptor() ([]byte, []int) {
	return file_st_proto_rawDescGZIP(), []int{4}
}

func (x *DeletePhotoRequest) GetPhotoId() int32 {
	if x != nil {
		return x.PhotoId
	}
	return 0
}

type DeletePhotoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Photo *Photo `protobuf:"bytes,1,opt,name=photo,proto3" json:"photo,omitempty"`
}

func (x *DeletePhotoResponse) Reset() {
	*x = DeletePhotoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_st_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeletePhotoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeletePhotoResponse) ProtoMessage() {}

func (x *DeletePhotoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_st_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeletePhotoResponse.ProtoReflect.Descriptor instead.
func (*DeletePhotoResponse) Descriptor() ([]byte, []int) {
	return file_st_proto_rawDescGZIP(), []int{5}
}

func (x *DeletePhotoResponse) GetPhoto() *Photo {
	if x != nil {
		return x.Photo
	}
	return nil
}

type ListPhotosRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PropertyId int32 `protobuf:"varint,1,opt,name=property_id,json=propertyId,proto3" json:"property_id,omitempty"`
}

func (x *ListPhotosRequest) Reset() {
	*x = ListPhotosRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_st_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListPhotosRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListPhotosRequest) ProtoMessage() {}

func (x *ListPhotosRequest) ProtoReflect() protoreflect.Message {
	mi := &file_st_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListPhotosRequest.ProtoReflect.Descriptor instead.
func (*ListPhotosRequest) Descriptor() ([]byte, []int) {
	return file_st_proto_rawDescGZIP(), []int{6}
}

func (x *ListPhotosRequest) GetPropertyId() int32 {
	if x != nil {
		return x.PropertyId
	}
	return 0
}

type ListPhotosResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Photo []*Photo `protobuf:"bytes,1,rep,name=photo,proto3" json:"photo,omitempty"`
}

func (x *ListPhotosResponse) Reset() {
	*x = ListPhotosResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_st_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListPhotosResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListPhotosResponse) ProtoMessage() {}

func (x *ListPhotosResponse) ProtoReflect() protoreflect.Message {
	mi := &file_st_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListPhotosResponse.ProtoReflect.Descriptor instead.
func (*ListPhotosResponse) Descriptor() ([]byte, []int) {
	return file_st_proto_rawDescGZIP(), []int{7}
}

func (x *ListPhotosResponse) GetPhoto() []*Photo {
	if x != nil {
		return x.Photo
	}
	return nil
}

var File_st_proto protoreflect.FileDescriptor

var file_st_proto_rawDesc = []byte{
	0x0a, 0x08, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x02, 0x73, 0x74, 0x22, 0x55,
	0x0a, 0x05, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x0a, 0x08, 0x70, 0x68, 0x6f, 0x74, 0x6f,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x70, 0x68, 0x6f, 0x74, 0x6f,
	0x49, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x03, 0x75, 0x72, 0x6c, 0x12, 0x1f, 0x0a, 0x0b, 0x70, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79,
	0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x70, 0x72, 0x6f, 0x70, 0x65,
	0x72, 0x74, 0x79, 0x49, 0x64, 0x22, 0x72, 0x0a, 0x04, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x07,
	0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x66, 0x69, 0x6c, 0x65, 0x4e,
	0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x69, 0x6c, 0x65, 0x4e,
	0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x63, 0x6f, 0x6e, 0x74, 0x65,
	0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63, 0x6f,
	0x6e, 0x74, 0x65, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x22, 0x53, 0x0a, 0x12, 0x55, 0x70, 0x6c,
	0x6f, 0x61, 0x64, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x1f, 0x0a, 0x05, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x09,
	0x2e, 0x73, 0x74, 0x2e, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x05, 0x70, 0x68, 0x6f, 0x74, 0x6f,
	0x12, 0x1c, 0x0a, 0x04, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x08,
	0x2e, 0x73, 0x74, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x04, 0x66, 0x69, 0x6c, 0x65, 0x22, 0x36,
	0x0a, 0x13, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1f, 0x0a, 0x05, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x09, 0x2e, 0x73, 0x74, 0x2e, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52,
	0x05, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x22, 0x2f, 0x0a, 0x12, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08,
	0x70, 0x68, 0x6f, 0x74, 0x6f, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07,
	0x70, 0x68, 0x6f, 0x74, 0x6f, 0x49, 0x64, 0x22, 0x36, 0x0a, 0x13, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1f,
	0x0a, 0x05, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x09, 0x2e,
	0x73, 0x74, 0x2e, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x05, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x22,
	0x34, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x70, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x70, 0x72, 0x6f, 0x70, 0x65,
	0x72, 0x74, 0x79, 0x49, 0x64, 0x22, 0x35, 0x0a, 0x12, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x68, 0x6f,
	0x74, 0x6f, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1f, 0x0a, 0x05, 0x70,
	0x68, 0x6f, 0x74, 0x6f, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x09, 0x2e, 0x73, 0x74, 0x2e,
	0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x05, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x32, 0xcd, 0x01, 0x0a,
	0x0c, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x40, 0x0a,
	0x0b, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x2e, 0x73,
	0x74, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x73, 0x74, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64,
	0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x28, 0x01, 0x12,
	0x3e, 0x0a, 0x0b, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x12, 0x16,
	0x2e, 0x73, 0x74, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x73, 0x74, 0x2e, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x3b, 0x0a, 0x0a, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x73, 0x12, 0x15, 0x2e,
	0x73, 0x74, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x68, 0x6f, 0x74, 0x6f, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x73, 0x74, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x68,
	0x6f, 0x74, 0x6f, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x05, 0x5a, 0x03,
	0x2f, 0x73, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_st_proto_rawDescOnce sync.Once
	file_st_proto_rawDescData = file_st_proto_rawDesc
)

func file_st_proto_rawDescGZIP() []byte {
	file_st_proto_rawDescOnce.Do(func() {
		file_st_proto_rawDescData = protoimpl.X.CompressGZIP(file_st_proto_rawDescData)
	})
	return file_st_proto_rawDescData
}

var file_st_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_st_proto_goTypes = []interface{}{
	(*Photo)(nil),               // 0: st.Photo
	(*File)(nil),                // 1: st.File
	(*UploadPhotoRequest)(nil),  // 2: st.UploadPhotoRequest
	(*UploadPhotoResponse)(nil), // 3: st.UploadPhotoResponse
	(*DeletePhotoRequest)(nil),  // 4: st.DeletePhotoRequest
	(*DeletePhotoResponse)(nil), // 5: st.DeletePhotoResponse
	(*ListPhotosRequest)(nil),   // 6: st.ListPhotosRequest
	(*ListPhotosResponse)(nil),  // 7: st.ListPhotosResponse
}
var file_st_proto_depIdxs = []int32{
	0, // 0: st.UploadPhotoRequest.photo:type_name -> st.Photo
	1, // 1: st.UploadPhotoRequest.file:type_name -> st.File
	0, // 2: st.UploadPhotoResponse.photo:type_name -> st.Photo
	0, // 3: st.DeletePhotoResponse.photo:type_name -> st.Photo
	0, // 4: st.ListPhotosResponse.photo:type_name -> st.Photo
	2, // 5: st.PhotoService.UploadPhoto:input_type -> st.UploadPhotoRequest
	4, // 6: st.PhotoService.DeletePhoto:input_type -> st.DeletePhotoRequest
	6, // 7: st.PhotoService.ListPhotos:input_type -> st.ListPhotosRequest
	3, // 8: st.PhotoService.UploadPhoto:output_type -> st.UploadPhotoResponse
	5, // 9: st.PhotoService.DeletePhoto:output_type -> st.DeletePhotoResponse
	7, // 10: st.PhotoService.ListPhotos:output_type -> st.ListPhotosResponse
	8, // [8:11] is the sub-list for method output_type
	5, // [5:8] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_st_proto_init() }
func file_st_proto_init() {
	if File_st_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_st_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Photo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_st_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*File); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_st_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadPhotoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_st_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadPhotoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_st_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeletePhotoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_st_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeletePhotoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_st_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListPhotosRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_st_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListPhotosResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_st_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_st_proto_goTypes,
		DependencyIndexes: file_st_proto_depIdxs,
		MessageInfos:      file_st_proto_msgTypes,
	}.Build()
	File_st_proto = out.File
	file_st_proto_rawDesc = nil
	file_st_proto_goTypes = nil
	file_st_proto_depIdxs = nil
}