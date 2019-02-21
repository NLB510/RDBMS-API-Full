const db = require('../dbConfig');


module.exports = {
  get,
  getById,
  getStudentsInCohort
};

function get() {
  return db("cohorts");
}


function getById(id) {
  return db("cohorts")
  .where({id})
  .first();
}


function getStudentsInCohort(id) {
  return db
  .select('cohorts.name as Cohort','students.name as Name').from('cohorts')
  .innerJoin('students', 'cohorts.id', 'students.cohort_id')
  .where('cohorts.id', id)
    
    // .where('cohorts.id', id)
    
    
    

  //SELECT c.customerName, c.contactname, o.orderdate  FROM customers c, orders o
  //where c.customerid = o.customerid
}