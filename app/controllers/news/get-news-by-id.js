/* "use strict";

// Para crear una conexion
const getPool = require("../../infraestructure/database");

async function getNewsById(req, res, next) {
  let connection;

  try {
    connection = await getPool();

    const [result] = await connection.query(`SELECT * FROM noticias;`);

    res.send({
      status: "ok",
      data: result,
    });
  } catch (err) {
    next(err);
  } finally {
    if (connection) connection.release();
  }
} */

/* const Joi = require("joi");
const { findById } = require("../repositories/news-repository");

const schema = Joi.number().positive().required();

async function getNewById(req, res) {
  try {
    const { id } = req.params;
    Joi.assert(id, schema);
    const news = await findById(parseInt(id));
    if (!car) {
      throw new Error("Id not available");
      // res.status(400).send("Id not available");
    }
    // res.status(200).send(news);
    res.send(news);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}
 */
/* module.exports = getNewsById; */
