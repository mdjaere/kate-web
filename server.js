'use strict'

const express = require("express")

const PORT = 8080
const HOST  = '0.0.0.0';

const app = express();
app.get(/, (res, req) => {
  res.send("Helo world!");
});
app.listen(PORT, HOST);
console.log(`Running server at ${HOST}:${PORT}`)
