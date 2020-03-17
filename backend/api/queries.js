const Pool = require('pg').Pool
const pool = new Pool({
  user: 'mvkapi',
  host: 'localhost',
  database: 'MVK',
  password: 'password',
  port: 5432,
})

  
const getResult = (request, response) => {
    pool.query('SELECT * FROM resultat', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getResult,
}