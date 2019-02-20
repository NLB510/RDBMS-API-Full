const db = require('../dbConfig');


module.exports = {
  get,
  getById
};

function get() {
  return db("cohorts");
}


function getById() {
  return db("cohorts")
  .where({id})
  .first();
}