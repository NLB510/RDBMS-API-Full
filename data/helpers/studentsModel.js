const db = require("../dbConfig");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  
};

function get() {
  return db("students");
}

function getById(id) {
  return db
    .select('students.name as studentName', 'cohorts.name as cohortName').from('students')
    .innerJoin('cohorts', "cohorts.id", "students.cohort_id")
    .where('students.id', id )
    .first();

// return db
//   .select("students.name as Name")
//   .from("cohorts")
//   .innerJoin("students", "cohorts.id", "students.cohort_id")
//   .where("cohorts.id", id);



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

function remove(id) {
  return db("students")
    .where("id", id)
    .del();
}
