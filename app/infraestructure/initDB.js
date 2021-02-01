require("dotenv").config();

const getPool = require("./database");

async function main() {
  let connection;

  try {
    connection = await getPool();

    // Detenemos la asignación de claves foráneas.
    await connection.query("SET FOREIGN_KEY_CHECKS = 0;");

    // Eliminamos las tablas si existen.
    await connection.query(`DROP TABLE IF EXISTS categorias;`);
    await connection.query(`DROP TABLE IF EXISTS noticias;`);
    await connection.query(`DROP TABLE IF EXISTS usuarios;`);
    await connection.query(`DROP TABLE IF EXISTS usuario_noticia;`);

    console.log("Tablas eliminadas.");

    // Creamos la tabla categorias.
    await connection.query(`
      CREATE TABLE categorias (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nombre varchar(100) NOT NULL
      );
    `);

    // Creamos la tabla de usuarios.
    await connection.query(`
      CREATE TABLE usuarios (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nombre VARCHAR(40) NOT NULL,
        apellido_1 varchar(60) NOT NULL,
        apellido_2 varchar(60) DEFAULT NULL,
        fecha_nacimiento date NOT NULL,
        foto varchar(150) DEFAULT NULL,
        biografia varchar(255)DEFAULT NULL,
        email varchar(60) NOT NULL,
        nickname varchar(30) NOT NULL,
        contrasena varchar(100) NOT NULL,
        fecha_creacion timestamp NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Creamos la tabla noticias.
    await connection.query(`
      CREATE TABLE noticias (
        id INT PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(200) NOT NULL,
        foto VARCHAR(255) DEFAULT NULL,
        entradilla VARCHAR(255) NOT NULL,
        texto VARCHAR(1000) NOT NULL,
        fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        id_usuario INT NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuarios (id) ON DELETE CASCADE,
        id_categoria INT NOT NULL,
        FOREIGN KEY (id_categoria) REFERENCES categorias (id) ON DELETE CASCADE
      );
    `);

    // Creamos la tabla usuario_noticia.
    await connection.query(`
      CREATE TABLE usuario_noticia (
        id INT PRIMARY KEY AUTO_INCREMENT,
        valoraciones_positivas tinyint DEFAULT NULL,
        valoraciones_negativas tinyint DEFAULT NULL,
        comentario varchar(250) DEFAULT NULL,
        fecha_valoracion timestamp NULL DEFAULT CURRENT_TIMESTAMP,
        id_noticia int NOT NULL,
        FOREIGN KEY (id_noticia) REFERENCES noticias (id) ON DELETE CASCADE,
        id_usuario int NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuarios (id) ON DELETE CASCADE
      );
    `);

    // Activamos la asignación de claves foráneas.
    await connection.query("SET FOREIGN_KEY_CHECKS = 1;");

    console.log("Tablas creadas.");

    // Insertamos usuarios de prueba.
    await connection.query(`
      INSERT INTO usuarios (nombre, apellido_1, apellido_2, fecha_nacimiento, email, nickname, contrasena)
      VALUES("monica", "papp", "paz", current_date(), "ppm0007@hotmail", "monik", "12345");`);

    await connection.query(`
      INSERT INTO usuarios (nombre, apellido_1, apellido_2, fecha_nacimiento, email, nickname, contrasena)
      VALUES("marte", "perez", "gomez", current_date(), "ppm087@hotmail", "marta", "67891");`);

    await connection.query(`
      INSERT INTO usuarios (nombre, apellido_1, fecha_nacimiento, email, nickname, contrasena)
      VALUES("anna", "vaduva", current_date(), "valvuda@hotmail", "valvuda", "22356");`);

    await connection.query(`
      INSERT INTO usuarios (nombre, apellido_1, apellido_2, fecha_nacimiento, email, nickname, contrasena)
      VALUES("armando", "numa", "medina", current_date(), "armando68@hotmail", "numa", "23456");`);

    await connection.query(`
      INSERT INTO usuarios (nombre, apellido_1, apellido_2, fecha_nacimiento, email, nickname, contrasena)
      VALUES("david", "silva", "torres", current_date(), "torressilva@hotmail", "davidte", "67891");`);

    await connection.query(`
      INSERT INTO usuarios (nombre, apellido_1, apellido_2, fecha_nacimiento, email, nickname, contrasena)
      VALUES("marco", "perez", "gonzalez", current_date(), "marcpp@hotmail", "mppg", "9874");`);

    await connection.query(`
      INSERT INTO usuarios (nombre, apellido_1, apellido_2, fecha_nacimiento, email, nickname, contrasena)
      VALUES("sandra", "velasquez", "izaguirre", current_date(), "sandrabebe@hotmail", "sandrita", "Sv.54978");`);

    // Insertamos categorías de prueba.
    await connection.query(
      `INSERT INTO categorias (nombre) VALUES("economía");`
    );
    await connection.query(
      `INSERT INTO categorias (nombre) VALUES("educación");`
    );
    await connection.query(
      `INSERT INTO categorias (nombre) VALUES("ciencia");`
    );
    await connection.query(
      `INSERT INTO categorias (nombre) VALUES("tecnología");`
    );
    await connection.query(
      `INSERT INTO categorias (nombre) VALUES("cultura");`
    );
    await connection.query(
      `INSERT INTO categorias (nombre) VALUES("deportes");`
    );

    // Insertamos noticias de prueba.
    await connection.query(`INSERT INTO noticias (titulo, id_categoria, entradilla, texto, id_usuario)
      VALUES ("Mi economía", 1, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet es veridictum", 3);`);

    await connection.query(`INSERT INTO noticias (titulo, id_categoria, entradilla, texto, id_usuario)
      VALUES ("Mi educación", 3, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet es veridictum", 5);`);

    await connection.query(`INSERT INTO noticias (titulo, id_categoria, entradilla, texto, id_usuario)
      VALUES ("Ciencia", 6, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet es veridictum", 1);`);

    await connection.query(`INSERT INTO noticias (titulo, id_categoria, entradilla, texto, id_usuario)
      VALUES ("Tecnología", 4, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet es veridictum", 6);`);

    await connection.query(`INSERT INTO noticias (titulo, id_categoria, entradilla, texto, id_usuario)
      VALUES ("Libro recomendado", 5, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet es veridictum", 2);`);

    await connection.query(`INSERT INTO noticias (titulo, id_categoria, entradilla, texto, id_usuario)
      VALUES ("Leyendas del deporte", 3, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet es veridictum", 5);`);

    await connection.query(`INSERT INTO noticias (titulo, id_categoria, entradilla, texto, id_usuario)
      VALUES ("Más allá del Universo", 2, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet es veridictum", 4);`);

    await connection.query(`INSERT INTO noticias (titulo, id_categoria, entradilla, texto, id_usuario)
      VALUES ("Mi medicina", 1, "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet es veridictum", 3);`);

    console.log("Datos de prueba insertados correctamente. ¡Fin del programa!");
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) connection.release();
  }
}

main();
