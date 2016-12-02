var User = require('./models/userModel.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({username: username}, function (err, user) {
      if (err) {return done(err);}
      if(!user) {
        return done(null, false, {message: 'Incorrect username.'});
      }
      if (!user.verifyPassword(password)) {
        return done(null, false, {mesage: 'Incorrect password.'});
      }
      return done(null, user);
    });
  }
));