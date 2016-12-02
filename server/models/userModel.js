var mongoose = require('mongoose');
var jobSchema = require('./jobSchema.js');

var userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  jobList: [jobSchema]
});

var User = mongoose.model('User', userSchema);



module.exports = User;
