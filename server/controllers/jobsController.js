var userController = require('./userController.js');

module.exports = {

  getJobsFromDb: function(username) {
    return userController.retrieveUser(username).then(function(resp) {
      return resp.jobList;
    })
  },


  addJobToDb: function(job, user) {
    user.jobList.push(job);

    user.save(function(err) {
      if(err) { console.log("Error adding job to userModel!")}
    });
  },

  removeJobFromDb: function() {

  },

  updateJobInDb: function() {}

}
