// inside index.js
const PORT = 3000;
const express = require("express");
const server = express();
const { client } = require("./db");
client.connect();

const bodyParser = require("body-parser");
server.use(bodyParser.json());

const morgan = require("morgan");
server.use(morgan("dev"));

// stuff above here

const apiRouter = require("./api");
server.use("/api", apiRouter);

// stuff below here

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
