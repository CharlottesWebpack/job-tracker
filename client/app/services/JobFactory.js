angular.module('jobTracker.jobService', [])
.factory('JobFactory', function($http) {

  var getAllJobs = function() {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'GET',
      url: '/jobs',
      params: {username: username}
    }).
    then(function(res) {
      return res.data; //this is an array of job objects
    });
  };

  var createJob = function(job) {
    var username = 'Nick' //need to actually make this work once users can log in
    console.log("JOB to be added", job)
    return $http({
      method: 'POST',
      url: '/jobs',
      data: job,
      params: {username: username}
    }).then((res) => {
      console.log("JOBS returned from server", res)
      return res.data.jobList;
    })
  };

  var deleteJob = function(job) {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'POST',
      url: '/jobs/delete',
      data: job,
      contentType: 'application/json',
      params: {username: username}
    }).then((res) => {
      return res.data.jobList;
    })
    .catch((err) => {
      console.log("ERR", err);
    });
  };

  var updateJob = function(job) {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'PUT',
      url: '/jobs',
      data: job,
      params: {username: username}
    }).then((res) => {
      return res.data.jobList;
    });
  };

  return {
    getAllJobs: getAllJobs,
    createJob: createJob,
    deleteJob: deleteJob,
    updateJob: updateJob
  };
});
