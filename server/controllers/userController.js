var User = require('../models/userModel.js');

// var updateUser = function(userObj) {
//   var user = new Promise(function(resolve, reject) {
//     User.findOne({'username': username}, function(err, user) {
//       if(err) {
//         reject(err);
//       }else {
//         resolve(user);
//       }
//     });
//   });
//
//   user.then(function(user) {
//     user.save(function(err, user) {
//       if(err) {
//         reject(err);
//       }else {
//         resolve(user);
//       }
//     });
//   });
// };

var addUser = function(userObj) {
  return new Promise(function(resolve, reject) {
    User.register(new User({'username': userObj.username}), userObj.password, function(err, newUser) {
      if(err) {
        reject(err);
      }else {
        resolve(newUser);
      }
    });
  });
};

var retrieveUser = function(username) {
  return new Promise(function(resolve, reject) {
    User.findOne({'username': username}, function(err, user) {
      if(err) {
        reject(err);
      }else {
        resolve(user);
      }
    });
  });
};

module.exports.addUser = addUser;
// module.exports.updateUser = updateUser;
module.exports.retrieveUser = retrieveUser;
