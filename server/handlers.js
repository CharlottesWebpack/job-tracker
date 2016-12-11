var userController = require('./controllers/userController.js');
var jobsController = require('./controllers/jobsController.js');
var googleSearchController = require('./controllers/googleSearchController');


module.exports = {

getUser: function(req, res) {
  var userId = req.user._id;
  userController.retrieveUser(userId)
  .then(function(user) {
    if(user === null) {
      res.sendStatus(204);
    } else {
      res.status(200).json(user);
    }
  }).catch(function(err) {
    console.error(err);
    res.status(500).json(err);
  });
  },

  postUser: function(req, res) {
    userController.addUser(req.body)
    .then(function(user) {
      res.status(201).json(user);
    }).catch(function(err) {
      console.error(err);
      res.status(400).json(err);
    });
  },

  logout: function(req, res) {
    req.session.destroy();
    res.send();
  }, //all of the docs say that this is not async....

  auth: function(req, res) {
    if(req.user) {
      res.send(true);
    } else {
      res.send(false);
    }
  },

  getJobs: function(req, res) {
    var userId = req.user._id;
    jobsController.getJobsFromDb(userId)
    .then(function(jobs) {
      res.send(jobs);
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(500);
    });
  },

  createJob: function(req, res) {
    var userId = req.user._id;
    var job = req.body;
    jobsController.addJobToDb(job, userId)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(500);
    });
  },

  deleteJob: function(req, res) {
    var userId = req.user._id;
    var job = req.body;
    jobsController.removeJobFromDb(job, userId)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(204);
    });
  },

  updateJob: function(req, res) {
    var userId = req.user._id;
    var job = req.body;
    jobsController.updateJobInDb(job, userId)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(204);
    });

  },

  uploadFile: function(req, res) {
    res.json({success : true});
  },

  updateUser: function(req, res){
    var userId = req.user._id;
    var user = req.body;
    userController.updateUserInDb(user, userId)
    .then(function(data) {
      res.send(data)
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(204);
    });
  },
  updatePassword: function(req,res){
    var userId = req.user._id;
    var user = req.body;
    userController.changePassword(user, userId)
    .then(function(data) {
      res.send(resp)
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(204);
    });
  },
  deleteAccount: function(req, res){
    var userId = req.user._id;
    userController.deleteUser(userId)
    .then(function(data) {
      res.send(data)
    })
    .catch(function(err) {
      console.error(err);
      res.sendStatus(204);
    });
  },
  searchGoogle: function(req, res) {
    console.log(req.query);
    googleSearchController(req.query.company)
    .then(function(data) {
      res.status(200).send(data);
    }).catch(function(error) {
      console.log(error);
      res.sendStatus(400);
    });
  }
};
