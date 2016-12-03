var userController = require('./userController.js');
var shortid = require('shortid')

module.exports = {

  getJobsFromDb: function(username) {
    return userController.retrieveUser(username).then(function(user) {
      return user.jobList;
    })
  },


  addJobToDb: function(job, username) {
    job.id = shortid.generate();
    return userController.retrieveUser(username).then(function(user) {
      user.jobList.push(job);

      user.save(function(err) {
        if(err) { console.log("Error adding job to userModel!", err)}
      });
    });
  },

  removeJobFromDb: function(job, username) {
    var jobid = job._id

    return userController.retrieveUser(username).then(function(user) {
      user.jobList.id(jobid).remove(); //need to error handle this!!!

      user.save(function(err) {
        if(err) { console.log("Error deleting job!", err)}
          return('Error!')
      });

    });
  },

  updateJobInDb: function() {}

}
