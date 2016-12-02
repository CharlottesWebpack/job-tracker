var userController = require('./userController.js');

module.exports = {

  getJobsFromDb: function(username) {
    return userController.retrieveUser(username).then(function(user) {
      return user.jobList;
    })
  },


  addJobToDb: function(job, username) {
    return userController.retrieveUser(username).then(function(user) {

      user.jobList.push(job);

      user.save(function(err) {
        if(err) { console.log("Error adding job to userModel!", err)}
      });
    });
  },

  removeJobFromDb: function() {

  },

  updateJobInDb: function() {}

}
