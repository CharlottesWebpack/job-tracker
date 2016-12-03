var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');
var handlers = require('./handlers.js');
var path = require('path');
var session = require('express-session');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(session({
  secret: 'kittyCat',
  resave: false,
  name: 'Nick_is_Awesome!!',
  cookie: {
    path:'/',
    httpOnly: true,
    secure: false,
    maxAge: 360000
  }
}));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../client')));

app.get('/login', handlers.getUser);

app.post('/signup', handlers.postUser);

app.get('/jobs', handlers.getJobs);

app.post('/jobs', handlers.createJob);

app.delete('/jobs', handlers.deleteJob);



db.on('error', (err) => {
  console.error("DB CONNECTION ERROR", err);
});

db.once('open', () => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  });
});
