angular.module('jobTracker.jobService', [])
.factory('JobFactory', function($http) {

  var getAllJobs = function(user) {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'GET',
      url: '/jobs',
      params: {username: username} //does this go to the header?
    }).
    then(function(resp) {
      return resp;
    });
  };

  var createJob = function(job) {
    return $http({
      method: 'POST',
      url: '/jobs',
      data: job
    });
  };

  var deleteJob = function(job) {
    return $http({
      method: 'DELETE',
      url: '/jobs',
      data: job
    });
  };

  var updateJob = function(job) {
    return $http({
      method: 'PUT',
      url: '/jobs',
      data: job
    });
  };

  return {
    getAllJobs: getAllJobs,
    createJob: createJob,
    deleteJob: deleteJob,
    updateJob: updateJob
  };
});
