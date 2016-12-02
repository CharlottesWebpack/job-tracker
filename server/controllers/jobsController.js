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
    return userController.retrieveUser(username).then(function(user) {
      // user.jobList.id().remove(); need to make our own id for this to work
    });
  },

  updateJobInDb: function() {}

}
