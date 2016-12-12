var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var User = require('../models/userModel.js');

passport.use(new FacebookStrategy({
    clientID: '1714910405504188',
    clientSecret: '1408ff7f0c65f213a38654643d0d1ae8',
    callbackURL: "http://localhost:3000/facebook"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    User.findOne({'facebookDisplayName': profile.displayName}, function (err, user) {
      if(err) {
        User.
        console.log(err, 'err');
        done(err);
      }else {
        console.log(user, 'user');
        done(null, user);
      }
    });
  }
));

module.exports = passport;
