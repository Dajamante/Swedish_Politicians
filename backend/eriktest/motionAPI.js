docUrl = "http://data.riksdagen.se/dokumentlista/?sok=&doktyp=mot&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&ebbtv=&talare=&exakt=&planering=&sort=datum&sortorder=desc&rapport=&utformat=json&a=s#soktraff";

var request = require("request");
motioner = [];

function parse(url) {
    return new Promise(function(resolve, reject) {
        request(url, function (error, response, body) {
            // in addition to parsing the value, deal with possible errors
            if (error) return reject(error);
            try {
                // JSON.parse() can throw an exception if not valid JSON
                response = JSON.parse(body);
                for (var i = 0; i < response.dokumentlista.dokument.length; i++) {
                    motioner.push([response.dokumentlista.dokument[i].id,
                    response.dokumentlista.dokument[i].summary,
                    response.dokumentlista.dokument[i].dokintressent.intressent[0].intressent_id,
                    response.dokumentlista.dokument[i].dokintressent.intressent[0].partibet]);
                }
                resolve(motioner);
            } catch(e) {
                reject(e);
            }
        });
    });
}

function getNextUrl(url, callback) {
    request.get(url, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        var jsonParsed = (JSON.parse(body));
        var nextUrl = jsonParsed.dokumentlista.nasta_sida;
        return callback(nextUrl);
    });
}

parse(docUrl).then(function(val) {
    console.log(val);
}).catch(function(err) {
    console.log(err);
});

