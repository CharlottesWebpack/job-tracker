var mongoose = require('mongoose');
var jobSchema = require('./jobSchema.js');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  facebookId: String,
  password: String,
  email: String,
  jobList: [jobSchema]
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);



module.exports = User;
