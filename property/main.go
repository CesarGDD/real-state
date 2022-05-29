package main

import (
	"cesargdd/rs-property/db"
	"cesargdd/rs-property/pp"
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
	pp.PropertysServiceServer
}

func (*server) CreateProperty(ctx context.Context, req *pp.CreatePropertyRequest) (*pp.CreatePropertyResponse, error) {
	return db.CreateProperty(ctx, req)
}
func (*server) DeleteProperty(ctx context.Context, req *pp.DeletePropertyRequest) (*pp.DeletePropertyResponse, error) {
	return db.DeleteProperty(ctx, req)
}
func (*server) GetPropertyById(ctx context.Context, req *pp.GetPropertyByIdRequest) (*pp.GetPropertyByIdResponse, error) {
	return db.GetPropertyById(ctx, req)
}
func (*server) UpdateProperty(ctx context.Context, req *pp.UpdatePropertyRequest) (*pp.UpdatePropertyResponse, error) {
	return db.UpdateProperty(ctx, req)
}
func (*server) ListProperty(ctx context.Context, req *pp.ListPropertyRequest) (*pp.ListPropertyResponse, error) {
	return db.ListProperty(ctx, req)
}
func (*server) ListPropertyByAgent(ctx context.Context, req *pp.ListPropertyByAgentIdRequest) (*pp.ListPropertyByAgentIdResponse, error) {
	return db.ListPropertyByAgent(ctx, req)
}

func main() {
	//if we crashed the go code, we get the file name and line number
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	fmt.Println("Conecting with Postgres")

	fmt.Println("Property service started")

	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	opts := []grpc.ServerOption{}

	s := grpc.NewServer(opts...)
	pp.RegisterPropertysServiceServer(s, &server{})

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
