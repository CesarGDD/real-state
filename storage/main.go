package main

import (
	"cesargdd/rs-storage/db"
	"cesargdd/rs-storage/st"
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type server struct {
	st.PhotoServiceServer
}

func (*server) UploadPhoto(stream st.PhotoService_UploadPhotoServer) error {
	return db.UploadPhoto(stream)
}
func (*server) DeletePhoto(ctx context.Context, req *st.DeletePhotoRequest) (*st.DeletePhotoResponse, error) {
	return db.DeletePhoto(ctx, req)
}
func (*server) ListPhotos(ctx context.Context, req *st.ListPhotosRequest) (*st.ListPhotosResponse, error) {
	return db.ListPhotos(ctx, req)
}

func main() {
	//if we crashed the go code, we get the file name and line number
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	fmt.Println("Conecting with Postgres and minio")

	fmt.Println("Property service started")

	lis, err := net.Listen("tcp", "0.0.0.0:50052")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	opts := []grpc.ServerOption{}

	s := grpc.NewServer(opts...)
	st.RegisterPhotoServiceServer(s, &server{})

	//Register reflection service on gRPC server
	reflection.Register(s)

	go func() {
		fmt.Println("Starting Server...")
		if err := s.Serve(lis); err != nil {
			log.Fatalf("Failed to serve: %v", err)
		}
	}()

	//Wait for Control C to exit
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)

	//BLock until a signal is received
	<-ch

	fmt.Println("Closing Conection Connection")
	fmt.Println("Stopping the server")
	s.Stop()
	fmt.Println("End of program")
}
