var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');
var handlers = require('./handlers.js');
var path = require('path');
var session = require('express-session');
var passport = require('passport');
var User = require('./models/userModel.js');


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

app.use(passport.initialize());

app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../client')));

app.post('/login', passport.authenticate('local'), handlers.getUser);

app.get('/jobs', handlers.getJobs);

app.post('/jobs', handlers.createJob);

app.post('/signup', handlers.postUser);

app.delete('/jobs', handlers.deleteJob);

app.put('/jobs', handlers.updateJob);



db.on('error', (err) => {
  console.error("DB CONNECTION ERROR", err);
});

db.once('open', () => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  });
});
