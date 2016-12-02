var User = require('..models/userModel.js');

module.exports.addJobToDb = function(job, user) {
  user.jobList.push(job);

  user.save(function(err) {
    if(err) { console.log("Error adding job to userModel!")}
  });
};

modele.exports.removeJobFromDb = function() {

};

module.exports.updateJobInDb = function() {};