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
  updateUserInDb: function(user, username) {
    
    return User.update(
      {"username": username}, 
      {"$set": 
        {"firstname": user.firstname , 
        "lastname" : user.lastname,
        "emailid":user.emailid,
        "dob":user.dob,
        "jobstatus":user.jobstatus
      }

    })
    .exec()
    .then(function(resp) {
      return resp;
    });
  },
  updateUserPasswordInDb: function(user, username) {
    
    return User.update(
      {"username": username}, 
      {"$set": 
        {"password": user.password}
    })
    .exec()
    .then(function(resp) {
      return resp;
    });
  },
  deleteProfile: function(username) {
    
    return User.remove(
      {"username": username} 
      )
    .exec()
    .then(function(resp) {
      return resp;
    });
  }

};
