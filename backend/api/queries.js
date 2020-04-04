const Pool = require("pg").Pool;

/** Connect to db */
const pool = new Pool({
  host: process.env.DBHOST || "localhost",
  port: 5432,
  database: process.env.DBDB || "MVK",
  user: process.env.DBUSER || "postgres",
  password: process.env.DBPASS || "",
});

/** querying the result from sentimentanalysis, SA and rank
 * them with Most negative at the top */
const getSAResultMostNegative = (req, res) => {
  let startdate = req.query.startdate;
  let enddate = req.query.enddate;
  // console.log(startdate);
  // console.log(enddate);
  pool.query(
    `SELECT DENSE_RANK () OVER (ORDER BY AVG(resultat_sentiment.resultat) ASC) AS rank, info.parti, info.namn, AVG(resultat_sentiment.resultat) as resultat 
      FROM (SELECT person_id, parti, namn, datum, anforande_id FROM anforandetext 
      NATURAL JOIN riksdagsledamot) as info 
      NATURAL JOIN resultat_sentiment WHERE info.datum > '${startdate}'
      AND info.datum < '${enddate}'
      GROUP BY info.parti, info.namn;`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

/** querying the result from sentimentanalysis, SA and rank
 * them with Most positive at the top, difference to
 * getSAResultMostNegative is DENSE_RANK ORDER BY --ASC-- instead of DESC */

const getSAResultMostPositive = (req, res) => {
  let startdate = req.query.startdate;
  let enddate = req.query.enddate;
  pool.query(
    `SELECT DENSE_RANK () OVER (ORDER BY AVG(resultat_sentiment.resultat) DESC) AS rank, info.parti, info.namn, AVG(resultat_sentiment.resultat) as resultat 
      FROM (SELECT person_id, parti, namn, datum, anforande_id FROM anforandetext 
      NATURAL JOIN riksdagsledamot) as info 
      NATURAL JOIN resultat_sentiment WHERE info.datum > '${startdate}'
      AND info.datum < '${enddate}'
      GROUP BY info.parti, info.namn;`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

/**
 * Export all neccessary modules
 */

module.exports = {
  getSAResultMostNegative,
  getSAResultMostPositive,
};
