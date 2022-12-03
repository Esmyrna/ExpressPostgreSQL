const db = require('../db')

const tasksRoute = (app) => {
  app.get('/tasks', db.selectTasks)
}

module.exports = tasksRoute
