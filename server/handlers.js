var mongoose = require('mongoose');
var User = require('./models/userModel.js');


var getUser = function(req, res) {
  var query = User.find(function(err, user) {
    if(err) {
      console.log(err, 'err');
    }else {
      console.log(user, 'user');
    }
    res.send(200);
  });

};

module.exports.getUser = getUser;
