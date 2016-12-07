var userController = require('./userController.js');
var User = require('../models/userModel.js');
var mongoose = require('mongoose');
var shortid = require('shortid');

mongoose.Promise = global.Promise;

module.exports = {

  getJobsFromDb: function(userId) {
    return userController.retrieveUser(userId)
    .then(function(user) {
      return user.jobList;
    });
  },


  addJobToDb: function(job, userId) {
    job.id = shortid.generate();
    return userController.retrieveUser(userId)
    .then(function(user) {
      user.jobList.push(job);
      return user;
    })
    .then(function(user) {
      return user.save();
    })
    .then(function(user) {
      return user;
    });
  },

  removeJobFromDb: function(job, userId) {
    var jobid = job._id

    return userController.retrieveUser(userId)
    .then(function(user) {
      user.jobList.id(jobid).remove();
      return user;
    })
    .then(function(user) {
      user.save();
      return user;
    })
    .then(function(user) {
      return user;
    });
  },

  updateJobInDb: function(job, userId) {
    var jobid = job._id;
    return User.update(
      {"_id": userId, "jobList._id": jobid}, 
      {"$set": 
        {"jobList.$": job}
    })
    .exec()
    .then(function(resp) {
      return resp;
    });
  }

}
