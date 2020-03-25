const Pool = require("pg").Pool;

/** Connect to db */
const pool = new Pool({
  host: process.env.DBHOST || "localhost",
  port: 5432,
  database: process.env.DBDB || "MVK",
  user: process.env.DBUSER || "postgres",
  password: process.env.DBPASS || ""
});

/** Produce json file by querying db */
const getResult = (request, response) => {
  pool.query(
    "SELECT info.parti, info.namn, AVG(resultat_sentiment.resultat) FROM (SELECT person_id, parti, namn, datum, anforande_id FROM anforandetext NATURAL JOIN riksdagsledamot) as info NATURAL JOIN resultat_sentiment WHERE info.datum > current_date - '7 days'::interval GROUP BY info.parti, info.namn ORDER BY info.parti;",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

/**
 * Export all neccessary modules
 */

module.exports = {
  getResult
};
