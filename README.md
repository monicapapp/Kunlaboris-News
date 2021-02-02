## Aplicación

- **GET** - [/events] - Obtener la lista de lugares misteriosos. ✅
- **GET** - [/news] - Obtener el listado de las noticias.
- **GET** - [/comments] - Obtener el listado de los comentarios.

- **GET** - [/events/:idEvent] - Obtener la info de un lugar misterioso concreto. ✅
- **GET** - [/news/:idNew] - Obtener la información de una noticia en concreto.

- **GET** - [/events/:idEvent/comments] - Obtener los comentarios de un lugar concreto. ✅
- **GET** - [/news/:idNew/comments] - Obtener los comentarios de una noticia especifica.

- **GET** - [/events/favourites/:idUser] - Obtener la lista de lugares favoritos. ✅ **CON TOKEN**

- **POST** - [/events] - Insertar un nuevo lugar misterioso. ✅ **CON TOKEN**
- **POST** - [/news] - Insertar una nueva noticia.

- **POST** - [/events/:idEvent/comments] - Comentar un lugar misterioso. ✅ **CON TOKEN**
- **POST** - [/news/:idNew/comment] - Comentar una noticia.

- **POST** - [/events/:idEvent/votes] - Valorar un lugar misterioso. ✅ **CON TOKEN**
- **POST** - [/news/:idNew/votes] - Valorar una noticia.

- **POST** - [/events/:idEvent/favourites] - Añadir a favoritos un lugar misterioso. ✅
  **CON TOKEN**

- **PUT** - [/events/:idEvent] - Editar un lugar misterioso. ✅ **CON TOKEN**
- **PUT/PATH** - [/news/:idNew] - Editar una noticia.

- **PUT/PATH** - [/news/:idNew/comments/:idComment] - Editar un comentario. ✅ **CON TOKEN**
- **PUT/PATH** - [/news/:idNew/comments/:idComment] - Editar un comentario.

- **PUT** - [/events/:idEvent/votes/:idRating] - Editar una valoración. ✅ **CON TOKEN**
- **PUT/PATH** - [/news/:idNew/votes/:idRating] - Editar una valoración.

- **DELETE** - [/events/:idEvent] - Eliminar un lugar misterioso. ✅ **CON TOKEN**
- **DELETE** - [/events/:idEvent/photos/:idPhoto] - Eliminar una foto asignada a un lugar misterioso. ✅ **CON TOKEN**
- **DELETE** - [/events/:idEvent/comments/:idComment] - Eliminar un comentario. ✅ **CON TOKEN**
- **DELETE** - [/events/:idEvent/favourites] - Eliminar un lugar favorito. ✅ **CON TOKEN**

## Users

- **GET** - [/users/validate/:regCode] - Valida un usuario. ✅
- **GET** - [/users/:idUser] - Obtener info de usuario. ✅ **CON TOKEN**

- **POST** - [/users] - Crea un usuario pendiente de activar. ✅
- **POST** - [/users/:idEvent] - Login de usuario. ✅
- **POST** - [/users/recovery] - Recuperar contraseña de usuario. ✅
- **POST** - [/users/reset] - Insertar nueva contraseña de usuario tras recuperación. ✅

- **PUT** - [/users/:idUser] - Editar datos de usuario. ✅ **CON TOKEN**
- **PUT** - [/users/:idUser/password] - Editar contraseña. ✅ **CON TOKEN**

- **DELETE** - [/users/:idUser] - Desactivar usuario. ✅ **CON TOKEN**
