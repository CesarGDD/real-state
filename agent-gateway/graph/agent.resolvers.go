package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"cesargdd/rs-agent-gateway/ag"
	"cesargdd/rs-agent-gateway/graph/generated"
	"cesargdd/rs-agent-gateway/pp"
	"context"
	"fmt"
)

func (r *agentResolver) Properties(ctx context.Context, obj *ag.Agent) ([]*pp.Property, error) {
	panic(fmt.Errorf("not implemented"))
}

// Agent returns generated.AgentResolver implementation.
func (r *Resolver) Agent() generated.AgentResolver { return &agentResolver{r} }

type agentResolver struct{ *Resolver }
