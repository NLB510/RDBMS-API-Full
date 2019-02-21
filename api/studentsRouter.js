const express = require("express");

const db = require('../data/helpers/studentsModel')

const router = express.Router();


// GET

router.get("/", (req, res) => {
  db.get()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving student data."
      });
    });
});


router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getById(id)
    .then(student => {
      if (!student) {
        res.status(404).json({
          errorMessage: "The student does not exist"
        });
      } else {
        res.status(200).json(student);
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving student data."
      });
    });
});


// POST

router.post("/", (req, res) => {
  const { name, cohort_id } = req.body;
  const post = req.body;

  if (!name || !cohort_id) {
    res.status(400).json({
      errorMessage: "Please include a student name and cohort id."
    });
  }

  db.insert(post)
    .then(student => {
      res.status(201).json({
        message: "Student added successfully.",
        student
      });
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error posting to the database."
      });
    });
});

module.exports = router;
