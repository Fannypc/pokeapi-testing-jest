const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const app = express();
require("dotenv").config();
// const abilityRouter = require("./routes/ability");
const abilitiesService = require("./services/ability");
// import { readAbilities } from "./services/ability";

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.route("/").get((req, res) => {
  res.send("Hello World!");
});

// app.use(abilityRouter);
app.route("/abilities").get((req, res) => {
  abilitiesService.readAbilities(req, res);
});
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hola Mundo");
// });

module.exports = app;
