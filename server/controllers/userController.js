var User = require('../models/userModel.js');

var addUser = function(userObj) {
  var user = new User({
    username: userObj.username,
    password: userObj.password,
    jobList: [{
      company: userObj.company,
      job_title: userObj.job_title,
      interest_level: userObj.interest_level,
      status: userObj.status
    }]
  });
  return new Promise(function(resolve, reject) {
    user.save(function(err, user) {
      if(err) {
        reject(err);
      }else {
        resolve(user);
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
module.exports.retrieveUser = retrieveUser;
