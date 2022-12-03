const { Pool } = require('pg')

const pool = new Pool({
    connectionString: 'postgres://llfwzkms:a2EImct7DEtfzbRDz606uyvzmYzezZ9g@babar.db.elephantsql.com/llfwzkms'
})


const SelecionarTarefas = async (_request, response) => {

    pool.query('SELECT * FROM tasks', (error, results) => {

        if (error) {
          throw error
        }
     
        response.status(200).json(results.rows)
      })
    
}

module.exports = { SelecionarTarefas }
