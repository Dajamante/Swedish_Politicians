const { Client } = require('pg')
// pools will use environment variables
// for connection information
const client = new Client({
    host: 'riksdagen.cntjqjzfg4nq.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'riksdagen',
    user: 'root',
    password: process.env.DBPASS,
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



//Function to add anforandetext to database
async function addAnfText(data) {
    var i;
    for (i = 0; i < data.length; i++) {
        await client.query('INSERT INTO anforandetext(text) VALUES($1)', [data[i]])
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
