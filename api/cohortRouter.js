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
      if (!cohort) {
        res.status(404).json({
          errorMessage: "The cohort does not exist"
        });
      } else {
        res.status(200).json(cohort);
      }
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
      if (students.length === 0) {
        return res.status(404).json({
          errorMessage: "The cohort does not exist"
        });
      } else {
        res.status(200).json(students);
      }
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

// DELETE

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then(count => {
      console.log(count);
      if (count === 0) {
        return res.status(404).json({
          message: "The cohort you specified does not exist."
        });
      } else {
        res.status(200).json({
          message: "Cohort removed successfully"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error deleting the cohort"
      });
    });
});

module.exports = router;
