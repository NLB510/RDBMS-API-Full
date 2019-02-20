const express = require('express');

// const db = require('')

const router = express.Router();



router.get('/', (req, res) => {
  res.send(`<h1>Cohort Router Working</h1>`)
})




module.exports = router;