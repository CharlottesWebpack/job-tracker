var mongoose = require('mongoose');
var User = require('models/userModel.js');


var getUser = function(req, res) {
  var query = User.findOne({'username': req.body.username});
  
};
