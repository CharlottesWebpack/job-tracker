var userController = require('./controllers/userController.js');
var jobsController = require('./controllers/jobsController.js');


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

  logout: function(req, res) {
    
  },

  getJobs: function(req, res) {
    var username = req.query.username;
    jobsController.getJobsFromDb(username)
    .then(function(jobs) {
      res.send(jobs);
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(500);
    });
  },

  createJob: function(req, res) {
    var username = req.query.username;
    var job = req.body;
    jobsController.addJobToDb(job, username)
    .then(function(resp) {
      console.log('resp in createJob', resp);
      res.send(resp);
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(500);
    });
  },

  deleteJob: function(req, res) {
    var username = req.query.username;
    var job = req.body;
    jobsController.removeJobFromDb(job, username)
    .then(function(resp) {
      res.send(resp);
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(204);
    });
  },

  updateJob: function(req, res) {
    var username = req.query.username;
    var job = req.body;
    jobsController.updateJobInDb(job, username)
    .then(function(resp) {
      res.send(resp);
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(204);
    });    
  }

};
