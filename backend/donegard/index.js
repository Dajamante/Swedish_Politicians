docUrl =
  "http://data.riksdagen.se/anforandelista/?rm=&anftyp=&d=&ts=&parti=M&iid=&sz=2&utformat=json";

var request = require("request");
var fs = require('fs');


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

function getText(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      // in addition to parsing the value, deal with possible errors
      if (error) return reject(error);
      try {
        const data = JSON.parse(body); // can throw an exception if not valid JSON
        resolve(data.anforande.anforandetext);
      } catch (e) {
        reject(e);
      }
    });
  });
}

async function looplkinks(links) {
  //links[0] = docUrl;
  let proms = [];
  for (let i = 0; i < links.length; i++) {
    proms.push(getText(links[i]));

  }
  const res = await Promise.all(proms);
  writeToDB(res);
  return res;
}
//Write anforandetext to database
function writeToDB(data) {
    db.connect();
    db.addAnfText(data);
}
const db = require('./db')
/* function readFromFile() {
  fs.readFile('./pythondata.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  });

} */

getTextLink(docUrl)
  .then(arr => looplkinks(arr))
  .then(res => console.log(res))
  .catch(() => console.log("Something went wrong!"));
//readFromFile();
