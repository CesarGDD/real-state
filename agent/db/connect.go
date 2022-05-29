package db

import (
	"cesargdd/rs-agent/ag"
	"context"
	"database/sql"
	"os"

	"fmt"

	"github.com/jinzhu/copier"
	_ "github.com/lib/pq"
)

var (
	hostname      = os.Getenv("POSTGRES_HOST")
	host_port     = 5432
	username      = os.Getenv("POSTGRES_USER")
	password      = os.Getenv("POSTGRES_PASSWORD")
	database_name = os.Getenv("POSTGRES_DB")
)

func Connect() *sql.DB {
	pg_con_string := fmt.Sprintf("port=%d host=%s user=%s "+"password=%s dbname=%s sslmode=disable",
		host_port, hostname, username, password, database_name)

	db, err := sql.Open("postgres", pg_con_string)
	if err != nil {
		fmt.Printf("Error conecting to the DB", err)
	}

	db.Exec("CREATE TABLE IF NOT EXISTS agent(agent_id SERIAL PRIMARY KEY NOT NULL, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) NOT NULL, phone SMALLSERIAL NOT NULL, email VARCHAR(30) NOT NULL, password VARCHAR(200) NOT NULL, photo VARCHAR(200) NOT NULL, description VARCHAR(1200) NOT NULL);")

	return db
}

var conn = Connect()
var db = New(conn)

func CreateAgent(ctx context.Context, req *ag.CreateAgentRequest) (*ag.CreateAgentResponse, error) {
	fmt.Println("Create agent grpc")
	res, err := db.CreateAgent(ctx, CreateAgentParams{
		FirstName:   req.Agent.FirstName,
		LastName:    req.Agent.LastName,
		Phone:       int16(req.Agent.Phone),
		Email:       req.Agent.Email,
		Password:    req.Agent.Password,
		Photo:       req.Agent.Photo,
		Description: req.Agent.Description,
	})
	if err != nil {
		return nil, err
	}
	return &ag.CreateAgentResponse{
		Agent: &ag.Agent{
			AgentId:     res.AgentId,
			FirstName:   res.FirstName,
			LastName:    res.LastName,
			Phone:       int32(res.Phone),
			Email:       res.Email,
			Photo:       res.Photo,
			Description: res.Description,
		},
	}, nil
}
func DeleteAgent(ctx context.Context, req *ag.DeleteAgentRequest) (*ag.DeleteAgentResponse, error) {
	fmt.Println("Delete Agent grpc")
	res, err := db.DeleteAgent(ctx, req.AgentId)
	if err != nil {
		return nil, err
	}
	return &ag.DeleteAgentResponse{
		Agent: &ag.Agent{
			AgentId:     res.AgentId,
			FirstName:   res.FirstName,
			LastName:    res.LastName,
			Phone:       int32(res.Phone),
			Email:       res.Email,
			Photo:       res.Photo,
			Description: res.Description,
		},
	}, nil
}
func GetAgentById(ctx context.Context, req *ag.GetAgentByIdRequest) (*ag.GetAgentByIdResponse, error) {
	fmt.Println("Agent by id grpc")
	res, err := db.GetAgentById(ctx, req.AgentId)
	if err != nil {
		return nil, err
	}
	return &ag.GetAgentByIdResponse{
		Agent: &ag.Agent{
			AgentId:     res.AgentId,
			FirstName:   res.FirstName,
			LastName:    res.LastName,
			Phone:       int32(res.Phone),
			Email:       res.Email,
			Photo:       res.Photo,
			Description: res.Description,
		},
	}, nil
}
func UpdateAgent(ctx context.Context, req *ag.UpdateAgentRequest) (*ag.UpdateAgentResponse, error) {
	fmt.Println("Update Agern grpc")
	res, err := db.UpdateAgent(ctx, UpdateAgentParams{
		AgentId:     req.Agent.AgentId,
		FirstName:   req.Agent.FirstName,
		LastName:    req.Agent.LastName,
		Phone:       int16(req.Agent.Phone),
		Email:       req.Agent.Email,
		Photo:       req.Agent.Photo,
		Description: req.Agent.Description,
	})
	if err != nil {
		return nil, err
	}
	return &ag.UpdateAgentResponse{
		Agent: &ag.Agent{
			AgentId:     res.AgentId,
			FirstName:   res.FirstName,
			LastName:    res.LastName,
			Phone:       int32(res.Phone),
			Email:       res.Email,
			Photo:       res.Photo,
			Description: res.Description,
		},
	}, nil
}
func ListAgent(ctx context.Context, req *ag.ListAgentRequest) (*ag.ListAgentResponse, error) {
	fmt.Println("List Agents grpc")
	res, err := db.ListAgents(ctx)
	if err != nil {
		return nil, err
	}
	data := &ag.ListAgentResponse{}
	copier.Copy(&data.Agent, &res)
	return &ag.ListAgentResponse{
		Agent: data.Agent,
	}, nil
}
