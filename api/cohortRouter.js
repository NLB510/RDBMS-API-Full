const express = require('express');

const db = require('../data/helpers/cohortsModel')

const router = express.Router();

//GET

router.get('/', (req, res) => {
  db.get()
  .then(cohorts => {
    res.status(200).json(cohorts)
  })
  .catch(error => {
    res.status(500).json({
      error: "There was an error retrieving cohorts data."
    })
  })
})




module.exports = router;