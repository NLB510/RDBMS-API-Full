const db = require("../dbConfig");

module.exports = {
  get,
  getById,
  getStudentsInCohort,
  insert,
  remove
};

function get() {
  return db("cohorts");
}

function getById(id) {
  return db("cohorts")
    .where({ id })
    .first();
}

function getStudentsInCohort(id) {
  return db
    .select("cohorts.name as Cohort", "students.name as Name")
    .from("cohorts")
    .innerJoin("students", "cohorts.id", "students.cohort_id")
    .where("cohorts.id", id);
}

function insert(post) {
  return db("cohorts")
    .insert(post)
    .then(ids => {
      return getById(ids[0]);
    });
}


function remove(id) {
  return db('cohorts')
  .where('id', id)
  .del()
}
