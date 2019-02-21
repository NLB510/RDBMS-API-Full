const db = require("../dbConfig");

module.exports = {
  get,
  getById,
  insert,
  update
}



function get() {
  return db('students');
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


function update(id, changes) {
  return db("students")
    .where("id", id)
    .update(changes);
} 