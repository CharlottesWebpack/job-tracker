angular.module('jobTracker.jobService', [])
.factory('JobFactory', function($http) {

  var getAllJobs = function(user) {
    var username = 'Nick'
    return $http({
      method: 'GET',
      url: '/jobs',
      params: {username: username}
    }).
    then(function(resp) {
      return resp;
    });
  };

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
