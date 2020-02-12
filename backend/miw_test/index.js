docUrl =
  "http://data.riksdagen.se/anforandelista/?rm=&anftyp=&d=&ts=&parti=M&iid=&sz=10&utformat=json";

var request = require("request");

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
  fs.writeFile('test.txt', res);
  return res;
}

getTextLink(docUrl)
  .then(arr => looplkinks(arr))
  .then(res => console.log(res))
  .catch(() => console.log("Something went wrong!"));

/*async function main() {
  const res = await looplkinks();
  console.log(res);
}*/

// http.get('http://data.riksdagen.se/anforandelista/?rm=&anftyp=&d=2019-01-01&ts=2020-01-01&parti=&iid=&sz=20000&utformat=json', (response) => {
//   data = '';

//   // called when a data chunk is received.
//   response.on('data', (chunk) => {
//     data += chunk;
//   });

//   // called when the complete response is received.

//   response.on('end', () => {
//     var k = JSON.parse(data).antal;
//     for(i=0; i< k; i++){
//        j[i] = JSON.parse(data).anforandelista.anforande[i].anforande_url_html;
//     }
//     console.log('Arrayn fylld!');
//   });

// }).on("error", (error) => {
//   console.log("Error: " + error.message);
// });

// for(i=0; i<j.length;i++){
//   http.get(j[i], (response) => {
//     data2 = '';

//     // called when a data chunk is received.
//     response.on('data', (chunk) => {
//       data2 += chunk;
//     });

//     // called when the complete response is received.
//     response.on('end', () => {
//       console.log(JSON.parse(data).anforandelista.anforande);
//     });

//   }).on("error", (error) => {
//     console.log("Error: " + error.message);
//   });
// }

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(JSON.parse(data).dokumentlista.dokument[0].id);
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// var request = require('request');
// var xml2js = require('xml2js');

// var sendJsonResponse = function(res, status, content) {
//     res.status(status);
//     res.json(content);
// };

// /* GET XML Content*/
// module.exports.dsRequest = function(req, res) {

//     var parser = new xml2js.Parser();

//     request('url_for_xml_request', function(error, response, body) {
//         parser.parseString(body, function(err, result) {
//             sendJsonResponse(res, 200, result);
//         });

//     });

// };
