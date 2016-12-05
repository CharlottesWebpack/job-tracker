var mongoose = require('mongoose');
var jobSchema = require('./jobSchema.js');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  jobList: [jobSchema]
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);



module.exports = User;
