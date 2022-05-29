package db

import (
	"bytes"
	"cesargdd/rs-storage/st"
	"context"
	"database/sql"
	"io"
	"io/ioutil"
	"log"
	"os"

	"fmt"

	"github.com/jinzhu/copier"
	_ "github.com/lib/pq"
	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

var (
	hostname      = os.Getenv("POSTGRES_HOST")
	host_port     = 5432
	username      = os.Getenv("POSTGRES_USER")
	password      = os.Getenv("POSTGRES_PASSWORD")
	database_name = os.Getenv("POSTGRES_DB")
)

var bucketName = "culon"
var location = "us-east-1"

func Connect() *sql.DB {
	pg_con_string := fmt.Sprintf("port=%d host=%s user=%s "+"password=%s dbname=%s sslmode=disable",
		host_port, hostname, username, password, database_name)

	db, err := sql.Open("postgres", pg_con_string)
	if err != nil {
		fmt.Printf("Error conecting to the DB", err)
	}

	db.Exec("CREATE TABLE IF NOT EXISTS photos(photo_id SERIAL PRIMARY KEY NOT NULL, url VARCHAR(200) NOT NULL, property_id SERIAL NOT NULL);")

	return db
}

func s3Conn() *minio.Client {
	endpoint := os.Getenv("MINIO_HOST") + ":9000"
	accessKeyId := "minio-root-user"
	secretAccessKey := "minio-root-password"
	useSSL := false

	// Initialize minio client object.
	minioClient, err := minio.New(endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyId, secretAccessKey, ""),
		Secure: useSSL,
	})
	if err != nil {
		log.Fatalln(err)
	}

	err = minioClient.MakeBucket(context.Background(), bucketName, minio.MakeBucketOptions{Region: location})
	if err != nil {
		// Check to see if we already own this bucket (which happens if you run this twice)
		exists, errBucketExists := minioClient.BucketExists(context.Background(), bucketName)
		if errBucketExists == nil && exists {
			log.Printf("We already own %s\n", bucketName)
		} else {
			log.Fatalln(err)
		}
	} else {
		log.Printf("Successfully created %s\n", bucketName)
	}

	log.Printf("%#v\n", minioClient) // minioClient is now set up
	return minioClient
}

var conn = Connect()
var db = New(conn)
var mc = s3Conn()

func UploadPhoto(stream st.PhotoService_UploadPhotoServer) error {
	fmt.Println("Upload photo grpc")

	for {
		req, err := stream.Recv()
		if err == io.EOF {
			return stream.SendAndClose(&st.UploadPhotoResponse{
				Photo: &st.Photo{
					Url: "Success",
				},
			})
		}
		if err != nil {
			log.Fatalf("Error while readind client stream %v\n", err)
		}
		in := ioutil.NopCloser(bytes.NewReader(req.File.Content))
		uploadInfo, err := mc.PutObject(context.Background(), bucketName, req.File.FileName, in, req.File.Size, minio.PutObjectOptions{ContentType: req.File.ContentType})
		if err != nil {
			fmt.Println(err)
		}
		res, err := db.UploadPhoto(context.Background(), UploadPhotoParams{
			PropertyId: req.Photo.PropertyId,
			Url:        uploadInfo.Key,
		})
		if err != nil {
			fmt.Println("error", err)
		}
		fmt.Println("Successfully uploaded bytes: ", uploadInfo)
		fmt.Println("response", res.Url)
	}
}

func DeletePhoto(ctx context.Context, req *st.DeletePhotoRequest) (*st.DeletePhotoResponse, error) {
	fmt.Println("Delete photo grpc")
	res, err := db.DeletePhoto(ctx, req.PhotoId)
	if err != nil {
		return nil, err
	}
	return &st.DeletePhotoResponse{
		Photo: &st.Photo{
			PhotoId:    res.PhotoId,
			Url:        res.Url,
			PropertyId: res.PropertyId,
		},
	}, nil
}

func ListPhotos(ctx context.Context, req *st.ListPhotosRequest) (*st.ListPhotosResponse, error) {
	fmt.Println("List photos grpc")
	res, err := db.ListPhotosByPhotosId(ctx, req.PropertyId)
	if err != nil {
		return nil, err
	}
	data := &st.ListPhotosResponse{}
	copier.Copy(&data.Photo, &res)
	return &st.ListPhotosResponse{
		Photo: data.Photo,
	}, nil
}
