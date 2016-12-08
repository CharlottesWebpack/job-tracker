const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const User = require('../models/userModel.js');

passport.use(new FacebookStrategy({
  clientID: '1714910405504188',
  clientSecret: '1408ff7f0c65f213a38654643d0d1ae8',
  callbackURL: 'http://localhost:3000/facebook/authorized'
},

  function(accessToken, refreshToken, profile, done) {
    User.findOne({'username': profile.displayName}, function(err, user) {
      if(err) {
        done(err);
      }else {
        done(null, user);
      }
    });
  }
));

module.exports = passport;
