const express = require('express')
const helmet = require('helmet')

const cohortsRouter = require('./api/cohortRouter');
const studentsRouter = require('./api/studentsRouter')


const server = express();
server.use(express.json())
server.use(helmet());
server.use('/api/cohorts', cohortsRouter)
server.use('/api/students', studentsRouter)


server.get('/', (req, res) => {
  res.send(`<h1>Hello from the API</h1>`)
})


module.exports = server;