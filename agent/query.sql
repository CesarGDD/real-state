-- name: GetAgentById :one
SELECT * FROM agent
WHERE agent_id = $1;

-- name: ListAgents :many
SELECT * FROM agent
ORDER BY agent_id;

-- name: CreateAgent :one
INSERT INTO agent (first_name, last_name, phone, email, password, photo, description)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;

-- name: DeleteAgent :one
DELETE FROM Agent
WHERE agent_id = $1
RETURNING *;

-- name: UpdateAgent :one
UPDATE agent 
SET first_name = $2, last_name = $3, phone = $4, email = $5, password = $6, photo = $7, description = $8
WHERE Agent_id = $1
RETURNING *;