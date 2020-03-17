
docUrl =
  "http://data.riksdagen.se/anforandelista/?rm=&anftyp=&d=&ts=&parti=&iid=&sz=15&utformat=json";

var request = require("request");
var fs = require('fs');
const db = require('./db')
var pyShell = require('python-shell');



function getTextLink(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, body) {
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

function getText(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, body) {
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

async function looplinks(links) {
  let proms = [];
  for (let i = 0; i < links.length; i++) {
    proms.push(getText(links[i]));

  }
  const res = await Promise.all(proms);
  return res;
}
//Write anforandetext to database
async function writeToDB(data) {
  db.connect();
  db.addAnfText(data);
}

//Skapa promise för att behandla datan
function processData() {
  return new Promise(function (resolve, reject) {
    pyShell.PythonShell.run('../dataprocessing/test_data.py', null, function (err) {
      if (err) {
        console.log(err);
        reject(err)
      } else {
        resolve('finished');
      }

    })
  })
} */

getTextLink(docUrl)
  .then(arr => looplinks(arr))
  .then(res => writeToDB(res))
  //.then(() => processData())
  .then((t) => console.log(t))
  .catch(() => console.log("Something went wrong!"));
