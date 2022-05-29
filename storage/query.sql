-- name: ListPhotosByPhotosId :many
SELECT * FROM photos
WHERE property_id = $1;

-- name: UploadPhoto :one
INSERT INTO photos (url, property_id)
VALUES ($1, $2)
RETURNING *;

-- name: DeletePhoto :one
DELETE FROM photos
WHERE photo_id = $1
RETURNING *;
