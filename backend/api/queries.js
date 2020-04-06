const Pool = require("pg").Pool;

/** Connect to db */
const pool = new Pool({
  host: process.env.DBHOST || "localhost",
  port: 5432,
  database: process.env.DBDB || "MVK",
  user: process.env.DBUSER || "postgres",
  password: process.env.DBPASS || "",
});

/** Rank the politicians who are most negative in their
 * speeches according to the sentimentanalysis, SA.
 * Sends response to enter dates for HTTP requests without specified dates,
 * example http://localhost:3000/getMostAbsent*/
const getSAResultMostNegative = (req, res) => {
  if (!req.query.startdate || !req.query.enddate) {
    res.json({
      info:
        "Please enter dates (startdate and enddate) for which you would like to get data between",
    });
  } else {
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
  }
};

/** Rank the politicians who are most positive in their
 * speeches according to the sentimentanalysis, SA.
 * Different to getSAResultMostNegative is DENSE_RANK ORDER BY --DESC-- instead of ASC
 * sends response to enter dates for HTTP requests without specified dates,
 * example http://localhost:3000/getMostAbsent*/

const getSAResultMostPositive = (req, res) => {
  if (!req.query.startdate || !req.query.enddate) {
    res.json({
      info:
        "Please enter dates (startdate and enddate) for which you would like to get data between",
    });
  } else {
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
  }
};

/** Rank the politicians who are most absent.
 * Sends response to enter dates for HTTP requests without specified dates,
 * example http://localhost:3000/getMostAbsent*/
const getMostAbsent = (req, res) => {
  if (!req.query.startdate || !req.query.enddate) {
    res.json({
      info:
        "Please enter dates (startdate and enddate) for which you would like to get data between",
    });
  } else {
    let startdate = req.query.startdate;
    let enddate = req.query.enddate;
    pool.query(
      `SELECT DENSE_RANK () OVER (ORDER BY COUNT(vot) DESC) AS rank, P.parti, P.namn, COUNT(vot) AS resultat 
        FROM voteringar as V
        NATURAL JOIN riksdagsledamot as P
        WHERE vot = 'Frånvarande' AND vot_datum > '${startdate}'
        AND vot_datum < '${enddate}'
        GROUP BY P.namn, P.parti
        ORDER BY rank;`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  }
};

/** Rank the politicians who votes against their own party's modal vot.
 * Sends response to enter dates for HTTP requests without specified dates,
 * example http://localhost:3000/getMostAbsent*/

const getVotedAgainstPartiMode = (req, res) => {
  if (!req.query.startdate || !req.query.enddate) {
    res.json({
      info:
        "Please enter dates (startdate and enddate) for which you would like to get data between",
    });
  } else {
    let startdate = req.query.startdate;
    let enddate = req.query.enddate;
    pool.query(
      `SELECT DENSE_RANK () OVER (ORDER BY CountPVAPartiMode.CountVA DESC) as rank, CountPVAPartiMode.parti AS parti, CountPVAPartiMode.namn AS namn, CountPVAPartiMode.countVA AS resultat
      FROM (SELECT PVAPartiMode.parti AS parti, PVAPartiMode.namn AS namn, count(namn) as CountVA
      FROM (SELECT P1.parti AS parti, P1.namn AS namn, vot, modal_value, V1.vot_datum AS vot_datum
      FROM voteringar V1
      NATURAL JOIN riksdagsledamot P1
      NATURAL JOIN (SELECT mode() WITHIN GROUP (ORDER BY vot) AS modal_value, P.Parti, voterings_id
      FROM (SELECT voterings_id, person_id, vot FROM voteringar as V WHERE NOT V.vot = 'Frånvarande') as V
      NATURAL JOIN riksdagsledamot as P
      WHERE NOT P.parti = '-'
      GROUP BY voterings_id, P.Parti) PartiMode
      WHERE NOT vot = 'Frånvarande' AND NOT vot = modal_value AND V1.vot_datum > '${startdate}' AND V1.vot_datum< '${enddate}'
      ORDER BY P1.namn) AS PVAPartiMode
      GROUP BY PVAPartiMode.parti, PVAPartiMode.namn) AS CountPVAPartiMode
      GROUP BY CountPVAPartiMode.namn, CountPVAPartiMode.CountVA, countpvapartimode.parti;`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  }
};

/**
 * Export all neccessary modules
 */

module.exports = {
  getSAResultMostNegative,
  getSAResultMostPositive,
  getMostAbsent,
  getVotedAgainstPartiMode,
};
