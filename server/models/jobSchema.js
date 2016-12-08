var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
  id: String,
  company: String,
  jobTitle: String,
  interestLevel: {type: Number, default: 1},
  status: {
    progress: {type: Number, default: 1},
    rejected: {type: Boolean, default: false}
  },
  location: String,
  contactPerson: String,
  contactInfo: String,
  jobLink: String,
  age: Date,
  description: String,
  notes: String
});

module.exports = jobSchema;

//job status explained:
  //Progress:
    // 1 - "Not applied"
    // 2 - "Applied",
    // 3 - "Responded",
    // 4 - "Phone screen",
    // 5 - "In-person interview",
    // 6 - "Offer",
    // 7 -"Application rejected"
  //rejected:
    //true or false;
  //ingored (i'm not interested anymore):
    //true or false;