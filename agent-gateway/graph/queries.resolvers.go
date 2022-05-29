package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"cesargdd/rs-agent-gateway/ag"
	"cesargdd/rs-agent-gateway/graph/generated"
	"cesargdd/rs-agent-gateway/pp"
	"cesargdd/rs-agent-gateway/st"
	"context"
	"fmt"
)

func (r *queryResolver) Agent(ctx context.Context, agentID int) (*ag.Agent, error) {
	fmt.Println("Agent ghaphql")
	res, err := agentService.GetAgentById(ctx, &ag.GetAgentByIdRequest{AgentId: int32(agentID)})
	if err != nil {
		return nil, err
	}
	return res.Agent, nil
}

func (r *queryResolver) ListAgent(ctx context.Context) ([]*ag.Agent, error) {
	fmt.Println("List Agents graphql")
	res, err := agentService.ListAgent(ctx, &ag.ListAgentRequest{})
	if err != nil {
		return nil, err
	}
	return res.Agent, nil
}

func (r *queryResolver) Property(ctx context.Context, propertyID int) (*pp.Property, error) {
	fmt.Println("Porperty graphql")
	res, err := propetyService.GetPropertyById(ctx, &pp.GetPropertyByIdRequest{PropertyId: int32(propertyID)})
	if err != nil {
		return nil, err
	}
	return res.Property, nil
}

func (r *queryResolver) ListProperty(ctx context.Context) ([]*pp.Property, error) {
	fmt.Println("List Property grapqhl")
	res, err := propetyService.ListProperty(ctx, &pp.ListPropertyRequest{})
	if err != nil {
		return nil, err
	}
	return res.Property, nil
}

func (r *queryResolver) ListPorpertyByAgent(ctx context.Context, agentID int) ([]*pp.Property, error) {
	fmt.Println("List property by agentId grapqhl")
	res, err := propetyService.ListPropertyByAgent(ctx, &pp.ListPropertyByAgentIdRequest{AgentId: int32(agentID)})
	if err != nil {
		return nil, err
	}
	return res.Property, nil
}

func (r *queryResolver) ListPhotosByProperty(ctx context.Context, propertyID int) ([]*st.Photo, error) {
	fmt.Println("List Photos graphql")
	res, err := storageService.ListPhotos(ctx, &st.ListPhotosRequest{PropertyId: int32(propertyID)})
	if err != nil {
		return nil, err
	}
	return res.Photo, nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
