var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
  id: String,
  company: String,
  jobTitle: String,
  interestLevel: {type: Number, default: 1},
  status: {type: String, default: "Not applied"},
  location: String,
  contactPerson: String,
  contactInfo: String,
  link: String,
  age: Date,
  description: String,
  notes: String
});

module.exports = jobSchema;
