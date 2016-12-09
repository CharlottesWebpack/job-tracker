var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');
var multer = require('multer');
var handlers = require('./handlers.js');
var path = require('path');
var session = require('express-session');
var passport = require('./auth/passLocal.js');
var User = require('./models/userModel.js');
var cookieParser = require('cookie-parser');

var app = express();
var PORT = process.env.PORT || 3000;


app.use(cookieParser());

app.use(session({
  secret: 'kittyCat',
  resave: false,
  name: 'Nick_is_Awesome!!',
  rolling: true,
  cookie: {
    path:'/',
    httpOnly: true,
    secure: false,
    maxAge: 600000,
  }
}));

app.use(passport.initialize());

app.use(passport.session());

app.use(multer({dest:path.join(__dirname,'./uploads')}).any('Nik'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../client')));

app.post('/login', passport.authenticate('local'), handlers.getUser);

app.post('/signup', handlers.postUser);

app.get('/logout', handlers.logout);

app.get('/auth', handlers.auth);

app.get('/jobs', handlers.getJobs);

app.post('/jobs', handlers.createJob);

app.post('/jobs/delete', handlers.deleteJob);

app.post('/upload', handlers.uploadFile);

app.put('/jobs', handlers.updateJob);



db.on('error', (err) => {
  console.error("DB CONNECTION ERROR", err);
});

db.once('open', () => {
  console.log('MongoDB connected');
  app.listen(PORT, process.env.IP, () => {
    console.log("Server listening on port", PORT);
  });
});
