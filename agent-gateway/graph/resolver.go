package graph

import "cesargdd/rs-agent-gateway/servers"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

var agentService = servers.AgentServer()
var propetyService = servers.PropertyServer()
var storageService = servers.StorageServer()

type Resolver struct{}
