var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');
var handlers = require('./handlers.js');
var path = require('path');
var session = require('express-session');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(session({secret: 'kittyCat'}));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../client')));

app.get('/user', handlers.getUser);

app.post('/user', handlers.postUser);



db.on('error', (err) => {
  console.error("DB CONNECTION ERROR", err);
});

db.once('open', () => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  });
});
