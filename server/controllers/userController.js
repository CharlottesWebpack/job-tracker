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

  retrieveUser: function(userId) {
    return new Promise(function(resolve, reject) {
      User.findOne({'_id': userId}, function(err, user) {
        if(err) {
          reject(err);
        }else {
          resolve(user);
        }
      });
    });
  },

  updateUserInDb: function(user, userId) {
    return User.update({"_id": userId}, user)
    .exec()
    .then(function(resp) {
      return resp;
    });
  },

  changePassword: function(user, userId) {
    return User.update(
    //TO BE REDONE
    //   {"username": username},
    //   {"$set":
    //     {"password": user.password}
    // })
    // .exec()
    // .then(function(resp) {
    //   return resp;
    );
  },

  deleteUser: function(userId) {
    return User.remove(
      {"_id": userId}
      )
    .exec()
    .then(function(resp) {
      return resp;
    });
  }

};
