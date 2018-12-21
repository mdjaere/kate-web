"use strict";
const path = require("path");

const express = require("express");
const PORT = 8080;
const app = express();

// app.get('/*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT);
console.log(`Running server with port ${PORT}`);
