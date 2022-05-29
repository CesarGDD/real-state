package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"cesargdd/rs-agent-gateway/ag"
	"cesargdd/rs-agent-gateway/graph/generated"
	"cesargdd/rs-agent-gateway/graph/model"
	"cesargdd/rs-agent-gateway/pp"
	"cesargdd/rs-agent-gateway/st"
	"context"
	"errors"
	"fmt"
	"io/ioutil"
)

func (r *mutationResolver) CreateAgent(ctx context.Context, input *model.CreateAgentInput) (*ag.Agent, error) {
	fmt.Println("Create agent grhapql")
	res, err := agentService.CreateAgent(ctx, &ag.CreateAgentRequest{
		Agent: &ag.Agent{
			FirstName:   input.FirstName,
			LastName:    input.LastName,
			Phone:       int32(input.Phone),
			Email:       input.Email,
			Password:    input.Password,
			Photo:       input.Photo,
			Description: input.Description,
		},
	})
	if err != nil {
		return nil, err
	}
	return res.Agent, nil
}

func (r *mutationResolver) UpdateAgent(ctx context.Context, input *model.UpdateAgenInput) (*ag.Agent, error) {
	fmt.Println("Update agent grpahql")
	res, err := agentService.UpdateAgent(ctx, &ag.UpdateAgentRequest{
		Agent: &ag.Agent{
			AgentId:     int32(input.AgentID),
			FirstName:   input.FirstName,
			LastName:    input.LastName,
			Phone:       int32(input.Phone),
			Email:       input.Email,
			Password:    input.Password,
			Photo:       input.Photo,
			Description: input.Description,
		},
	})
	if err != nil {
		return nil, err
	}
	return res.Agent, nil
}

func (r *mutationResolver) DeleteAgent(ctx context.Context, agentID int) (*ag.Agent, error) {
	fmt.Println("Delete agent graphql")
	res, err := agentService.DeleteAgent(ctx, &ag.DeleteAgentRequest{AgentId: int32(agentID)})
	if err != nil {
		return nil, err
	}
	return res.Agent, nil
}

func (r *mutationResolver) CreateProperty(ctx context.Context, input *model.CreatePropertyInput) (*pp.Property, error) {
	fmt.Println("Create property")
	res, err := propetyService.CreateProperty(ctx, &pp.CreatePropertyRequest{
		Property: &pp.Property{
			Address:     input.Address,
			Status:      input.Status,
			Rooms:       int32(input.Rooms),
			Toilets:     int32(input.Toilets),
			Park:        int32(input.Park),
			Size:        int32(input.Size),
			Description: input.Description,
			Features:    input.Features,
			AgentId:     int32(input.AgentID),
		},
	})
	if err != nil {
		return nil, err
	}
	return res.Property, nil
}

func (r *mutationResolver) UpdateProperty(ctx context.Context, input *model.UpdatePropertyInput) (*pp.Property, error) {
	fmt.Println("Updtate property grap")
	res, err := propetyService.UpdateProperty(ctx, &pp.UpdatePropertyRequest{
		Property: &pp.Property{
			PropertyId:  int32(input.PropertyID),
			Address:     input.Address,
			Status:      input.Status,
			Rooms:       int32(input.Rooms),
			Toilets:     int32(input.Toilets),
			Park:        int32(input.Park),
			Size:        int32(input.Size),
			Description: input.Description,
			Features:    input.Features,
		},
	})
	if err != nil {
		return nil, err
	}
	return res.Property, nil
}

func (r *mutationResolver) DeleteProperty(ctx context.Context, propertyID int) (*pp.Property, error) {
	fmt.Println("Delete Property graph")
	res, err := propetyService.DeleteProperty(ctx, &pp.DeletePropertyRequest{PropertyId: int32(propertyID)})
	if err != nil {
		return nil, err
	}
	return res.Property, nil
}

func (r *mutationResolver) UploadPhoto(ctx context.Context, input []*model.UploadPhotoInput) ([]*st.Photo, error) {
	fmt.Println("Upload Photo GrpahQL")
	if len(input) == 0 {
		return nil, errors.New("empty list")
	}
	var resp []*st.Photo

	for i := range input {
		content, readErr := ioutil.ReadAll(input[i].File.File)
		if readErr != nil {
			fmt.Printf("error from file %v", readErr)
		}

		stream, err := storageService.UploadPhoto(ctx)
		if err != nil {
			return nil, err
		}

		stream.Send(&st.UploadPhotoRequest{File: &st.File{
			Content:     content,
			FileName:    input[i].File.Filename,
			Size:        input[i].File.Size,
			ContentType: input[i].File.ContentType,
		},
			Photo: &st.Photo{
				PropertyId: int32(input[i].PropertyID),
			}})

		res, err := stream.CloseAndRecv()
		if err != nil {
			return nil, err
		}
		resp = append(resp, res.Photo)
	}

	return resp, nil
}

func (r *mutationResolver) DeletePhoto(ctx context.Context, photoID int) (*st.Photo, error) {
	fmt.Println("Delete photo graphql")
	res, err := storageService.DeletePhoto(ctx, &st.DeletePhotoRequest{PhotoId: int32(photoID)})
	if err != nil {
		return nil, err
	}
	return res.Photo, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }
