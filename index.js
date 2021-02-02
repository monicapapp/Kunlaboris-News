'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();

// Middleware que comprueba si una noticia existe.
const isNew = require('./app/middlewares/isNew');

// News middlewares.
const { createNew, getNews, getNewById, updateNewById, removeNewById } = require('./app/controllers/news/routes');

// Puerto donde se iniciará el servidor.
const port = process.env.SERVER_PORT;

// Middleware que indica la ruta a los archivos estáticos.
app.use(express.static(path.join(__dirname, 'static')));

// Nos ofrece información sobre la petición en la consola.
app.use(morgan('dev'));

// Middleware que permite leer el body mediante "req.body".
app.use(bodyParser.json());

// Middleware que permite la lectura de imágenes.
app.use(fileUpload());

// Listar todas las noticias.
app.get('/api/v1/news', getNews);

// Obtener una noticia concreta.
app.get('/api/v1/news/:idNew', isNew, getNewById);

// Crear una nueva noticia.
app.post('/api/v1/news', createNew);

// Actualizar noticia.
app.put('/api/v1/news/:idNew', isNew, updateNewById);

// Eliminar una noticia.
app.delete('/api/v1/news/:idNew', isNew, removeNewById);

// TODO: Listar todos los comentario de un evento concreto.
app.get('/api/v1/news/:idNew/comments');

// TODO: Crear un comentario.
app.post('/api/v1/news/:idNew/comment');

// TODO: Editar un comentario.
app.put('/api/v1/news/:idNew/comments/:idComment');

// TODO: Eliminar un comentario.
app.delete('/api/v1/news/:idNew/comments/:idComment');

// Middleware de error.
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.httpStatus || 500).send({
    status: 'error',
    message: error.message,
  });
});

// Middlewarre de no encontrado.
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

app.listen(port, () => console.log(`Listening ${port}...`));
