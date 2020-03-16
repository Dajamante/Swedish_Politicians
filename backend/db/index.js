const { Client } = require('pg')
// pools will use environment variables
// for connection information
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'MVK',
    user: 'postgres',
    password: '123',
})
//Connect client to database
function connect() {
    client.connect(err => {
        if (err) {
            console.log('connection error', err.stack)
        } else {
            console.log('connected')
        }
    })
}



function storeData(data, i) {
    return new Promise(function (resolve, reject) {
        if (error) return reject(error);
        try {
            resolve(
            client.query('INSERT INTO anforandetext(text) VALUES($1)', [data[i]])
            //client.query('INSERT INTO anforandeperson(name) VALUES ($1)', [data.talare[i]]),
            //client.query('INSERT INTO parti(partinamn) VALUES ($1)', [data.parti[i]])
            );
        }
        catch (e) {
            reject(e);
          }
      });
}


//Function to add anforandetext to database
async function addAnfText(data) {
    let proms = [];
    var i;
    for (i = 0; i < data.length; i++) {
        proms.push(storeData(data, i));
    }
    res = await Promise.all(proms);
    disconnect();
    return res;
}


//Disconnect the client from the database
function disconnect() {
    client.end(err => {
        console.log('client has disconnected')
        if (err) {
        console.log('error during disconnection', err.stack)
        }
    })
}
exports.connect = connect;
exports.disconnect = disconnect;
exports.addAnfText = addAnfText;