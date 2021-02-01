"use strict";

const getPool = require("../../infraestructure/database");

async function createComent(req, res, next) {
  let connection;

  try {
    connection = await getPool();

    const { text, idUser } = req.body;

    await connection.query(
      `
        INSERT INTO noticias (texto, id_usuario)
        VALUES (?, ?)
      `,
      [text, idUser]
    );

    res.send({
      status: "ok",
      message: "Se ha agregado una nuevo comentario.",
    });
  } catch (err) {
    next(err);
  } finally {
    if (connection) connection.release();
  }
}

module.exports = createComment;
