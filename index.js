"use strict";

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();

// News middlewares.
const { createNew, getNews } = require("./app/controllers/news/routes");

// Puerto donde se iniciará el servidor.
const port = process.env.SERVER_PORT;

// Middleware que indica la ruta a los archivos estáticos.
app.use(express.static(path.join(__dirname, "static")));

// Nos ofrece información sobre la petición en la consola.
app.use(morgan("dev"));

// Middleware que permite leer el body mediante "req.body".
app.use(bodyParser.json());

// Middleware que permite la lectura de imágenes.
app.use(fileUpload());

// Listar todas las noticias.
app.get("/api/v1/news", getNews);

// Crear una nueva noticia.
app.post("/api/v1/new", createNew);

// Listar todos los comentarios.
app.get("/api/v1/comment");

// Crear un comentario.
app.post("/api/v1/comment");

// Middleware de error.
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.httpStatus || 500).send({
    status: "error",
    message: error.message,
  });
});

// Middlewarre de no encontrado.
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Not found",
  });
});

app.listen(port, () => console.log(`Listening ${port}...`));
