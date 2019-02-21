const db = require("../dbConfig");

module.exports = {
  get,
  getById,
  insert
}



function get() {
  return db('cohorts');
}


function getById(id) {
  return db("students")
    .where({ id })
    .first();
}

function insert(post) {
  return db("students")
    .insert(post)
    .then(ids => {
      return getById(ids[0]);
    });
}