const express = require("express");

const db = require("../data/helpers/cohortsModel");

const router = express.Router();

//GET

router.get("/", (req, res) => {
  db.get()
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving cohorts data."
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getById(id)
    .then(cohort => {
      res.status(200).json(cohort);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving cohorts data."
      });
    });
});

router.get("/:id/students", (req, res) => {
  const id = req.params.id;

  db.getStudentsInCohort(id)
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "There was an error retrieving cohorts data.",
        error: error
      });
    });
});

// POST

router.post("/", (req, res) => {
  const { name } = req.body;
  const post = req.body;

  if (!name) {
    res.status(400).json({
      errorMessage: "Please include a cohort name"
    });
  }

  db.insert(post)
    .then(cohort => {
      res.status(201).json({
        message: "Cohort added successfully.",
        cohort
      });
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error posting to the database."
      });
    });
});

module.exports = router;
