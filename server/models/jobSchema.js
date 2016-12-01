var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
  company: String,
  job_title: String,
  interest_level: {type: Number, default: 0},
  status: {type: String, default: 'not yet applied'}
});

module.exports = jobSchema;
