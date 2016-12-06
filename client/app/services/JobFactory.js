angular.module('jobTracker.jobService', [])
.factory('JobFactory', function($http) {

  var getAllJobs = function() {
    return $http({
      method: 'GET',
      url: '/jobs'
    }).
    then(function(res) {
      console.log("bid res obj",res);
      return res.data; //this is an array of job objects
    });
  };

  var createJob = function(job) {
    return $http({
      method: 'POST',
      url: '/jobs',
      data: job
    }).then((res) => {
      return res.data.jobList;
    })
  };

  var deleteJob = function(job) {
    return $http({
      method: 'POST',
      url: '/jobs/delete',
      data: job,
      contentType: 'application/json'
    }).then((res) => {
      return res.data.jobList;
    })
    .catch((err) => {
      console.log("ERR", err);
    });
  };

  var updateJob = function(job) {
    return $http({
      method: 'PUT',
      url: '/jobs',
      data: job
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
