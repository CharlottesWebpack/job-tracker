var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

db.on('error', (err) => {
  console.error("DB CONNECTION ERROR", err);
})

db.once('open', () => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  } )
})
