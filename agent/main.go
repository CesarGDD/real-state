package main

import (
	"cesargdd/rs-agent/ag"
	"cesargdd/rs-agent/db"
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
	ag.AgentsServiceServer
}

func (*server) CreateAgent(ctx context.Context, req *ag.CreateAgentRequest) (*ag.CreateAgentResponse, error) {
	return db.CreateAgent(ctx, req)
}
func (*server) DeleteAgent(ctx context.Context, req *ag.DeleteAgentRequest) (*ag.DeleteAgentResponse, error) {
	return db.DeleteAgent(ctx, req)
}
func (*server) GetAgentById(ctx context.Context, req *ag.GetAgentByIdRequest) (*ag.GetAgentByIdResponse, error) {
	return db.GetAgentById(ctx, req)
}
func (*server) UpdateAgent(ctx context.Context, req *ag.UpdateAgentRequest) (*ag.UpdateAgentResponse, error) {
	return db.UpdateAgent(ctx, req)
}
func (*server) ListAgent(ctx context.Context, req *ag.ListAgentRequest) (*ag.ListAgentResponse, error) {
	return db.ListAgent(ctx, req)
}

func main() {
	//if we crashed the go code, we get the file name and line number
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	fmt.Println("Conecting with Postgres")

	fmt.Println("Agent service started")

	lis, err := net.Listen("tcp", "0.0.0.0:50050")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	opts := []grpc.ServerOption{}

	s := grpc.NewServer(opts...)
	ag.RegisterAgentsServiceServer(s, &server{})

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
