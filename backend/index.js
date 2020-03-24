ledamotUrl =
  "http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=samtliga&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=";

var request = require("request");
var fs = require("fs");
const db = require("./db");
var pyShell = require("python-shell");

/**
 * Get all riksdagsledamöter that has been in the swedish riksdag since 1991
 * @param {string} url - riksdagens api
 */
function getRiksdagsledamot(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      // in addition to parsing the value, deal with possible errors
      if (error) return reject(error);
      try {
        const data = JSON.parse(body); // can throw an exception if not valid JSON
        resolve(data.personlista.person);
      } catch (e) {
        reject(e);
      }
    });
  });
}
/**
 * Function to compose URL for Anforanden.
 * @param {string} date - on form 2020-03-23, fetch all anforanden from this date up until todays date
 * @param {string} iid - Optional param->use empty string if not applied.identificationnumber for persons in riksdagen. Can be used to fetch anforanden made by a specific person
 */
function createAnforandeURL(date, iid) {
  return (
    "http://data.riksdagen.se/anforandelista/?rm=&anftyp=&d=" +
    date +
    "&ts=&parti=&iid=" +
    iid +
    "&sz=100000&utformat=json"
  );
}
/**
 * Fetch all links to anforandetexter
 * @param {string} url - riksdagens api
 */
function getTextLink(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      // in addition to parsing the value, deal with possible errors
      let links = [];
      if (error) return reject(error);
      try {
        // JSON.parse() can throw an exception if not valid JSON
        const data = JSON.parse(body);
        for (var i = 0; i < data.anforandelista.anforande.length; i++) {
          const url = data.anforandelista.anforande[i].anforande_url_html;
          links.push(url.substring(0, url.length - 4) + "json");
        }
        resolve(links);
      } catch (e) {
        reject(e);
      }
    });
  });
}
/**
 * Fetch all data regarding anforanden
 * @param {string} url - riksdagens api
 */
function getText(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      // in addition to parsing the value, deal with possible errors
      if (error) return reject(error);
      try {
        const data = JSON.parse(body); // can throw an exception if not valid JSON
        resolve(data.anforande);
      } catch (e) {
        reject(e);
      }
    });
  });
}
/**
 * Fetch all anforandetexter
 * @param {array} links - contains all links to anforanden
 */
async function looplinks(links) {
  let proms = [];
  for (let i = 0; i < links.length; i++) {
    proms.push(getText(links[i]));
  }
  const res = await Promise.all(proms);
  return res;
}

/**
 * Store data in table riksdagsledamöter
 * @param {array} data - contains all data fetch from getRiksdagsledamot
 */
async function writeToRiksdagsledamot(data) {
  await db.addDataRiksdagsledamot(data);
}

/**
 * Store data in table anforandetext
 * @param {array} data - contains all data from getText
 */
async function writeToAnforandetext(data) {
  await db.addDataAnforandetext(data);
}

//Skapa promise för att behandla datan
function processData() {
  return new Promise(function(resolve, reject) {
    pyShell.PythonShell.run("../dataprocessing/test_data.py", null, function(
      err
    ) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve("finished");
      }
    });
  });
}
db.connect();
getRiksdagsledamot(ledamotUrl)
  .then(arr => writeToRiksdagsledamot(arr))
  .then(() => getTextLink(createAnforandeURL("2020-03-18", "")))
  .then(arr => looplinks(arr))
  .then(res => writeToAnforandetext(res))
  //.then(() => processData())
  .then(t => console.log(t))
  .catch((err) => console.log(err));
