angular.module('jobFactory', [])
.factory(function($http) {

  var createJob = function(job) {

  };

  var deleteJob = function() {

  };

  var updateJob = function() {};

  return {
    getAllJobs: getAllJobs,
    createJob: createJob,
    deleteJob: deleteJob, 
    updateJob: updateJob
  };
});