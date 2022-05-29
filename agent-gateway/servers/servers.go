package servers

import (
	"cesargdd/rs-agent-gateway/ag"
	"cesargdd/rs-agent-gateway/pp"
	"cesargdd/rs-agent-gateway/st"
	"log"
	"os"

	"google.golang.org/grpc"
)

func AgentServer() ag.AgentsServiceClient {
	opts := grpc.WithInsecure()
	cc, err := grpc.Dial(os.Getenv("AGENT_ADDRESS")+":"+os.Getenv("AGENT_PORT"), opts)
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}
	// defer cc.Close()
	ag := ag.NewAgentsServiceClient(cc)

	return ag
}
func PropertyServer() pp.PropertysServiceClient {
	opts := grpc.WithInsecure()
	cc, err := grpc.Dial(os.Getenv("PROPERTY_ADDRESS")+":"+os.Getenv("PROPERTY_PORT"), opts)
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}
	// defer cc.Close()
	pp := pp.NewPropertysServiceClient(cc)

	return pp
}
func StorageServer() st.PhotoServiceClient {
	opts := grpc.WithInsecure()
	cc, err := grpc.Dial(os.Getenv("STORAGE_ADDRESS")+":"+os.Getenv("STORAGE_PORT"), opts)
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}
	// defer cc.Close()
	st := st.NewPhotoServiceClient(cc)

	return st
}
