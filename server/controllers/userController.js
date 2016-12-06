var User = require('../models/userModel.js');

module.exports = {
  addUser: function(userObj) {
    return new Promise(function(resolve, reject) {
      User.register(new User({'username': userObj.username}), userObj.password, function(err, newUser) {
        if(err) {
          reject(err);
        }else {
          resolve(newUser);
        }
      });
    });
  },

  retrieveUser: function(username) {
    return new Promise(function(resolve, reject) {
      User.findOne({'username': username}, function(err, user) {
        if(err) {
          reject(err);
        }else {
          resolve(user);
        }
      });
    });
  }
};
