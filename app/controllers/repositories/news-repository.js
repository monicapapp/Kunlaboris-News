"use strict";

const database = require("../../infraestructure/database");

async function createNew(name) {
  const { title, type, href } = news;
  const pool = await database.getPool();
  const query = "INSERT INTO news (title, type, href) VALUES (?,?,?)";
  const [news] = await pool.query(query[(title, type, href)]);

  /*  const pool = await database.getPool();
  const insertQuery = ' INSERT INTO news (titulo) VALUES (?)';
  const [created] = await pool.query(insertQuery, [name]);
  return created.insertId; */

  return true;
}

async function findAll() {
  const pool = await database.getPool();
  const query = "SELECT * FROM news";

  const [news] = await pool.query(query);

  return news;
}

async function findById(id) {
  const pool = await database.getPool();
  const query = "SELECT * FROM news WHERE id=?";

  const [news] = await pool.query(query);

  return news;
}

async function removeById(id) {
  return true;
}

module.exports = {
  createNew,
  findAll,
  findById,
  removeById,
};

//----
/* 
const { query } = require('express');
const database = require('../infrastructure/database');

async function createCategory(name) {
  const pool = await database.getPool();
  const insertQuery = 'INSERT INTO categoria (nombre) VALUES (?)';
  const [created] = await pool.query(insertQuery, [name]);
  return created.insertId;
}

async function findByCategory(name) {
  const pool = await database.getPool();
  const query = 'SELECT * FROM categoria WHERE nombre = ?';
  const [category] = await pool.query(query, [name]);
  return category[0];
}

async function findAllCategories() {
  const pool = await database.getPool();
  const query = 'SELECT * FROM categoria';
  const [category] = await pool.query(query);
  return category;
}

async function findCategoryById(id) {
  const pool = await database.getPool();
  const query = 'SELECT * FROM categoria WHERE id = ?';
  const [category] = await pool.query(query, id);
  return category[0];
}

async function updateCategoryById(id, name) {
  const pool = await database.getPool();
  const updateQuery = 'UPDATE categoria SET nombre = ? WHERE id = ?';
  await pool.query(updateQuery, [name, id]);
  return true;
}

async function removeCategoryById(id) {
  const pool = await database.getPool();
  const deleteQuery = 'DELETE FROM categoria WHERE id = ?';
  await pool.query(deleteQuery, id);
  return true;
}

module.exports = {
  createCategory,
  findByCategory,
  findAllCategories,
  findCategoryById,
  removeCategoryById,
  updateCategoryById,
}; */
