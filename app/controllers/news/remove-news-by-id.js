"usestrict";

const { response } = require("express");
const { removeById } = require("../repositories/news-repository");

function deleteNewsById(req, res) {
  try {
    const { id } = req.params;
    const news = removeById(parseInt(id));

    res.status(200).send(news);
  } catch (err) {
    res.status();
  }
}

module.exports = deleteNewsById;
