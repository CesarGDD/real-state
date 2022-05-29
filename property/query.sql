-- name: GetPropertyById :one
SELECT * FROM property
WHERE property_id = $1;

-- name: ListPropertys :many
SELECT * FROM property
ORDER BY property_id;

-- name: ListPropertyByAgentId :many
SELECT * FROM property
WHERE agent_id = $1;

-- name: CreateProperty :one
INSERT INTO property (address, status, rooms, toilets, park, size, description, features, agent_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING *;

-- name: DeleteProperty :one
DELETE FROM Property
WHERE property_id = $1
RETURNING *;

-- name: UpdateProperty :one
UPDATE Property 
SET address = $2, status = $3, rooms = $4, toilets = $5, park = $6, size = $7, description = $8, features = $9
WHERE Property_id = $1
RETURNING *;