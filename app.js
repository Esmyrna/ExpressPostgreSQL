const express = require('express')
const app = express()

const RotasDaTarefa = require('./routes/tasksRoute')

const port = 3000





app.use(express.json())



RotasDaTarefa(app)

const server = app.listen(port, () => {
  console.log(`Server is running in: ${port}`)
})
