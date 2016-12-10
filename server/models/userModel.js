var mongoose = require('mongoose');
var jobSchema = require('./jobSchema.js');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
  firstname:{type: String, default:''},
  lastname:{type: String, default:''},
  emailid:{type: String, default:''},
  dob:{type: Date, default:''},
  jobstatus:{type: String, default:''},
  
  username: {type: String, unique: true},
  facebookId: String,
  password: String,
  email: String,
  jobList: [jobSchema]
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);



module.exports = User;
