const { Pool } = require('pg')

// Criando pool de conexão:
const pool = new Pool({
    connectionString: 'postgres://llfwzkms:a2EImct7DEtfzbRDz606uyvzmYzezZ9g@babar.db.elephantsql.com/llfwzkms'
})


const SelecionarTarefas = async (_request, response) => {

    // Query de SELECT:
    pool.query('SELECT * FROM tasks', (error, results) => {

        // Lançando erro:
        if (error) {
          throw error
        }
        // Response com as linhas do sql
        response.status(200).json(results.rows)
      })
    
}

module.exports = { SelecionarTarefas }