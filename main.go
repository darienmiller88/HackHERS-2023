package main

import (
	"fmt"
	"log"
	"os"
	"net/http"

	"github.com/kamva/mgm/v3"
	"github.com/joho/godotenv"
	"github.com/go-chi/chi"
	"github.com/unrolled/render"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type FeedBackForm struct{
	mgm.Model
	StoreName  string `json:"store_name"`
	Suggestion string `json:"suggestion"`
	Username   string `json:"username"`
}

func main(){
	godotenv.Load()
	err := mgm.SetDefaultConfig(nil, "HackHers2023", options.Client().ApplyURI(os.Getenv("MONGO_URI")))

	if err != nil{
		log.Fatal(err)
	}

	fmt.Println("err:", err)

	r := render.New()
	router := chi.NewRouter()

	router.Get("/", func(res http.ResponseWriter, req *http.Request) {
		r.JSON(res, http.StatusOK, map[string]interface{}{
			"message": "hello world",
		})
	})

	router.Post("/", func(res http.ResponseWriter, req *http.Request) {

	})

	fmt.Println("Running on port:", os.Getenv("PORT"))
	http.ListenAndServe(fmt.Sprintf(":%s", os.Getenv("PORT")), router)
}