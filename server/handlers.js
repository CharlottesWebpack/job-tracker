var userController = require('./controllers/userController.js');
var jobsController = require('./controllers/jobsController.js');

<<<<<<< HEAD
module.exports = {

getUser: function(req, res) {
    userController.retrieveUser(req.query.username).then(function(user) {
      if(user === null) {
        console.log('user not found');
        res.sendStatus(204);
      }else {
        console.log(user);
        res.status(200).json(user);
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).json(err);
    });
  },

  postUser: function(req, res) {
    userController.addUser(req.body).then(function(user) {
      console.log('a user was added to the database :): ', user);
      res.status(201).json(user);
    }).catch(function(err) {
      console.log(err);
      res.status(400).json(err);
    });
  },

  getJobs: function(req, res) {
    var username = req.headers.username;
    jobsController.getJobsFromDb(username)
    .then(function(jobs) {
      res.send(jobs);
    });
  },

  createJob: function(req, res) {
    var username = req.headers.username;
    var job = req.body;
    jobsController.addJobToDb(job, username)
    .then(function(resp) {
      console.log('resp in createJob', resp);
      res.send(resp);
    });
  },

  deleteJob: function(req, res) {
    var username = req.headers.username;
    var job = req.body;
    jobsController.removeJobFromDb(job, username)
    .then(function(resp) {
      res.send(resp);
    });
  },

  updateJob: function(req, res) {
    var username = req.headers.username;
    var job = req.body;
    jobsController.updateJobInDb(job, username)
    .then(function(resp) {
      res.send(resp);
    });
  }

};
