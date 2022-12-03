const express = require('express')
const app = express()

const RotasDaTarefa = require('./routes/tasksRoute')

const port = 3000




// Usando json e url-encoded para as requisições:
app.use(express.json())


// Usando a rota das tarefas:
RotasDaTarefa(app)

const server = app.listen(port, () => {
  console.log(`Server is running in: ${port}`)
})
