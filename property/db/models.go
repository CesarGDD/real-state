// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.13.0

package db

import ()

type Property struct {
	PropertyId  int32
	Address     string
	Status      string
	Rooms       int16
	Toilets     int16
	Park        int16
	Size        int32
	Description string
	Features    string
	AgentId     int32
}
