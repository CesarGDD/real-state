// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.13.0
// source: query.sql

package db

import (
	"context"
)

const deletePhoto = `-- name: DeletePhoto :one
DELETE FROM photos
WHERE photo_id = $1
RETURNING photo_id, url, property_id
`

func (q *Queries) DeletePhoto(ctx context.Context, photoId int32) (Photo, error) {
	row := q.db.QueryRowContext(ctx, deletePhoto, photoId)
	var i Photo
	err := row.Scan(&i.PhotoId, &i.Url, &i.PropertyId)
	return i, err
}

const listPhotosByPhotosId = `-- name: ListPhotosByPhotosId :many
SELECT photo_id, url, property_id FROM photos
WHERE property_id = $1
`

func (q *Queries) ListPhotosByPhotosId(ctx context.Context, propertyId int32) ([]Photo, error) {
	rows, err := q.db.QueryContext(ctx, listPhotosByPhotosId, propertyId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Photo
	for rows.Next() {
		var i Photo
		if err := rows.Scan(&i.PhotoId, &i.Url, &i.PropertyId); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const uploadPhoto = `-- name: UploadPhoto :one
INSERT INTO photos (url, property_id)
VALUES ($1, $2)
RETURNING photo_id, url, property_id
`

type UploadPhotoParams struct {
	Url        string
	PropertyId int32
}

func (q *Queries) UploadPhoto(ctx context.Context, arg UploadPhotoParams) (Photo, error) {
	row := q.db.QueryRowContext(ctx, uploadPhoto, arg.Url, arg.PropertyId)
	var i Photo
	err := row.Scan(&i.PhotoId, &i.Url, &i.PropertyId)
	return i, err
}
