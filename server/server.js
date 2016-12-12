var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');
var handlers = require('./handlers.js');
var path = require('path');
var session = require('express-session');
var passport = require('./auth/passLocal.js');
var pasportFacebook = require('./auth/passFb.js');
var User = require('./models/userModel.js');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var crypto = require('crypto');
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
    maxAge: 6000000,
  }
}));

app.use(passport.initialize());

app.use(passport.session());

var storage = multer.diskStorage({
  destination: path.join(__dirname, './uploads'),
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) {
        return cb(err);
      } else {
        cb(null, raw.toString('hex') + path.extname(file.originalname));
      }
    });
  }
});
app.use(multer({
  storage: storage
}).any());

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../client')));

app.post('/login', passport.authenticate('local'), handlers.getUser);

app.post('/signup', handlers.postUser);

app.get('/facebook', passport.authenticate('facebook'), function(req, res) {
  console.log(req);
  res.sendStatus(200);
});

app.get('/logout', handlers.logout);

app.get('/auth', handlers.auth);

app.get('/jobs', handlers.getJobs);

app.post('/jobs', handlers.createJob);

app.post('/upload', handlers.uploadFile);

app.post('/jobs/delete', handlers.deleteJob);

app.put('/jobs', handlers.updateJob);

app.get('/users', handlers.getUser);

app.put('/users', handlers.updateUser);

app.put('/users/password', passport.authenticate('local'), handlers.updatePassword);

app.post('/users/delete', handlers.deleteAccount);

app.get('/getNews', handlers.searchGoogle);


db.on('error', (err) => {
  console.error("DB CONNECTION ERROR", err);
});

db.once('open', () => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  });
});
