var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');
var handlers = require('./handlers.js');
var User = require('./models/userModel.js');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/user', function(req, res) {
  User.find({'username': req.query.username}, function(err, user) {
    if(err) {
      console.log(err, 'err');
    }else {
      console.log(user[0], 'user');
    }
    res.send(200);
  });
});

app.post('/user', function(req, res) {
  var user = new User({
    username: 'Nick',
    password: 'Nick',
    jobList: [{
      company: 'facebook'
    }]
  });
  user.save(function(err, user) {
    if(err) {
      console.log(err, 'err');
    }else {
      console.log(user, 'user');
    }
    res.send(200);
  });
});







db.on('error', (err) => {
  console.error("DB CONNECTION ERROR", err);
});

db.once('open', () => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  });
});
