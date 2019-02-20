const express = require("express");

const db = require('../data/helpers/studentsModel')

const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving cohorts data."
      });
    });
});

module.exports = router;
