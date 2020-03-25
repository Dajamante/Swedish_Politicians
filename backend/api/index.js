const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./queries");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

/** Get the js.on file on http://localhost:3000/result */
app.get("/result", db.getResult);

/** Start server an listen to port 3000 */
app.listen(3000, () => console.log("Webhook server is listening, port 3000"));
