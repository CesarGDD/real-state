package db

import (
	"cesargdd/rs-property/pp"
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

	db.Exec("CREATE TABLE IF NOT EXISTS property(property_id SERIAL PRIMARY KEY NOT NULL, address VARCHAR(200) NOT NULL, status VARCHAR(30) NOT NULL, rooms SMALLSERIAL NOT NULL, toilets SMALLSERIAL NOT NULL, park SMALLSERIAL NOT NULL, size SERIAL NOT NULL, description VARCHAR(1200) NOT NULL, features VARCHAR(1200) NOT NULL, agent_id SERIAL NOT NULL);")

	return db
}

var conn = Connect()
var db = New(conn)

func CreateProperty(ctx context.Context, req *pp.CreatePropertyRequest) (*pp.CreatePropertyResponse, error) {
	fmt.Println("Create property gRPC")
	res, err := db.CreateProperty(ctx, CreatePropertyParams{
		Address:     req.Property.Address,
		Status:      req.Property.Status,
		Rooms:       int16(req.Property.Rooms),
		Toilets:     int16(req.Property.Toilets),
		Park:        int16(req.Property.Park),
		Size:        req.Property.Size,
		Description: req.Property.Description,
		Features:    req.Property.Features,
		AgentId:     req.Property.AgentId,
	})
	if err != nil {
		return nil, err
	}
	return &pp.CreatePropertyResponse{
		Property: &pp.Property{
			PropertyId:  res.PropertyId,
			Address:     res.Address,
			Status:      res.Status,
			Rooms:       int32(res.Rooms),
			Toilets:     int32(res.Toilets),
			Park:        int32(res.Park),
			Size:        res.Size,
			Description: res.Description,
			Features:    res.Features,
			AgentId:     res.AgentId,
		},
	}, nil
}
func DeleteProperty(ctx context.Context, req *pp.DeletePropertyRequest) (*pp.DeletePropertyResponse, error) {
	fmt.Println("Delete property gRPC")
	res, err := db.DeleteProperty(ctx, req.PropertyId)
	if err != nil {
		return nil, err
	}
	return &pp.DeletePropertyResponse{
		Property: &pp.Property{
			PropertyId:  res.PropertyId,
			Address:     res.Address,
			Status:      res.Status,
			Rooms:       int32(res.Rooms),
			Toilets:     int32(res.Toilets),
			Park:        int32(res.Park),
			Size:        res.Size,
			Description: res.Description,
			Features:    res.Features,
			AgentId:     res.AgentId,
		},
	}, nil
}
func GetPropertyById(ctx context.Context, req *pp.GetPropertyByIdRequest) (*pp.GetPropertyByIdResponse, error) {
	fmt.Println("Property by id grpc")
	res, err := db.GetPropertyById(ctx, req.PropertyId)
	if err != nil {
		return nil, err
	}
	return &pp.GetPropertyByIdResponse{
		Property: &pp.Property{
			PropertyId:  res.PropertyId,
			Address:     res.Address,
			Status:      res.Status,
			Rooms:       int32(res.Rooms),
			Toilets:     int32(res.Toilets),
			Park:        int32(res.Park),
			Size:        res.Size,
			Description: res.Description,
			Features:    res.Features,
			AgentId:     res.AgentId,
		},
	}, nil
}
func UpdateProperty(ctx context.Context, req *pp.UpdatePropertyRequest) (*pp.UpdatePropertyResponse, error) {
	fmt.Println("Update property grpc")
	res, err := db.UpdateProperty(ctx, UpdatePropertyParams{
		PropertyId:  req.Property.PropertyId,
		Address:     req.Property.Address,
		Status:      req.Property.Status,
		Rooms:       int16(req.Property.Rooms),
		Toilets:     int16(req.Property.Toilets),
		Park:        int16(req.Property.Park),
		Size:        req.Property.Size,
		Description: req.Property.Description,
		Features:    req.Property.Features,
	})
	if err != nil {
		return nil, err
	}
	return &pp.UpdatePropertyResponse{
		Property: &pp.Property{
			PropertyId:  res.PropertyId,
			Address:     res.Address,
			Status:      res.Status,
			Rooms:       int32(res.Rooms),
			Toilets:     int32(res.Toilets),
			Park:        int32(res.Park),
			Size:        res.Size,
			Description: res.Description,
			Features:    res.Features,
			AgentId:     res.AgentId,
		},
	}, nil
}
func ListProperty(ctx context.Context, req *pp.ListPropertyRequest) (*pp.ListPropertyResponse, error) {
	fmt.Println("List Properties grpc")
	res, err := db.ListPropertys(ctx)
	if err != nil {
		return nil, err
	}
	data := &pp.ListPropertyResponse{}
	copier.Copy(&data.Property, &res)
	return &pp.ListPropertyResponse{
		Property: data.Property,
	}, nil
}
func ListPropertyByAgent(ctx context.Context, req *pp.ListPropertyByAgentIdRequest) (*pp.ListPropertyByAgentIdResponse, error) {
	fmt.Println("List Properties by agent grpc")
	res, err := db.ListPropertys(ctx)
	if err != nil {
		return nil, err
	}
	data := &pp.ListPropertyByAgentIdResponse{}
	copier.Copy(&data.Property, &res)
	return &pp.ListPropertyByAgentIdResponse{
		Property: data.Property,
	}, nil
}
