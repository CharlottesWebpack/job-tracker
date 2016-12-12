var mongoose = require('mongoose');
var jobSchema = require('./jobSchema.js');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  facebookDisplayName: String,
  password: String,
  jobList: [jobSchema],

  firstname: String,
  lastname: String,
  email: String,
  phone: Number,
  jobstatus: {type: Number, default: 1}
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);



module.exports = User;


///////////////////////////
////Job status explained///
///////////////////////////

//1 - actively looking for a job
//2 - found a job
//3 - not actively looking for a job
