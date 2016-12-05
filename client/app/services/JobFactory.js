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
    return $http({
      method: 'POST',
      url: '/jobs',
      data: job,
      params: {username: username}
    }).then((res) => {
      return res.data.jobList;
    })
  };

  var deleteJob = function(job) {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'DELETE',
      url: '/jobs',
      data: job,
      params: {username: username}
    });
  };

  var updateJob = function(job) {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'PUT',
      url: '/jobs',
      data: job,
      params: {username: username}
    });
  };

  return {
    getAllJobs: getAllJobs,
    createJob: createJob,
    deleteJob: deleteJob,
    updateJob: updateJob
  };
});
