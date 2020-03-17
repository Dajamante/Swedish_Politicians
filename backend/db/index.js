const { Client } = require('pg')
// pools will use environment variables
// for connection information
const client = new Client({
    host: process.env.DBHOST || "localhost",
    port: 5432,
    database: process.env.DBDB || "mvk",
    user: process.env.DBUSER || "postgres",
    password: process.env.DBPASS || "",
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
    return new Promise(function(resolve, reject) {
        try {
            resolve(
                client.query('INSERT INTO anforandetext(text) VALUES($1)', [data[i]]),
                client.query('INSERT INTO anforandeperson(name) VALUES ($1)', [data[i].talare]),
                client.query('INSERT INTO parti(partinamn) VALUES ($1)', [data[i].parti])
            );
        }
        catch (e) {
            reject(e);
        }
    });
}


//Function to add anforandetext to database
async function addAnfText(data) {
    var i;
    for (i = 0; i < data.length; i++) {
        await storeData(data, i)
    }
    disconnect();
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
