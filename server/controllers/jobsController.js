var userController = require('./userController.js');
var User = require('../models/userModel.js');
var mongoose = require('mongoose');
var shortid = require('shortid');

mongoose.Promise = global.Promise;

module.exports = {

  getJobsFromDb: function(username) {
    return userController.retrieveUser(username)
    .then(function(user) {
      return user.jobList;
    })
  },


  addJobToDb: function(job, username) {
    job.id = shortid.generate();
    return userController.retrieveUser(username)
    .then(function(user) {
      user.jobList.push(job);

      return user.save()
      .then(function(resp) {
        return resp;
      });
    });
  },

  removeJobFromDb: function(job, username) {
    var jobid = job._id

    return userController.retrieveUser(username)
    .then(function(user) {
      user.jobList.id(jobid).remove();

      return user.save()
      .then(function(resp) {
        return resp;
      });
    });
  },

  updateJobInDb: function(job, username) {
    var jobid = job._id;
    return User.update(
      {"username": username, "jobList._id": jobid}, 
      {"$set": 
        {"jobList.$": job}
    })
    .exec()
    .then(function(resp) {
      return resp;
    });
  }

}
