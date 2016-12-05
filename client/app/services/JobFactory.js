angular.module('jobTracker.jobService', [])
.factory('JobFactory', function($http) {

  var getAllJobs = function() {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'GET',
      url: '/jobs',
      params: {username: username} //does this go to the header?
    }).
    then(function(resp) {
      return resp.data; //this is an array of job objects
    });
  };

  var createJob = function(job) {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'POST',
      url: '/jobs',
      data: job,
      params: {username: username} //does this go to the header?
    }).then((res) => {
      console.log("RESPONSE form server", res)
      return res.data;
    })
  };

  var deleteJob = function(job) {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'DELETE',
      url: '/jobs',
      data: job,
      params: {username: username} //does this go to the header?
    });
  };

  var updateJob = function(job) {
    var username = 'Nick' //need to actually make this work once users can log in
    return $http({
      method: 'PUT',
      url: '/jobs',
      data: job,
      params: {username: username} //does this go to the header?
    });
  };

  return {
    getAllJobs: getAllJobs,
    createJob: createJob,
    deleteJob: deleteJob,
    updateJob: updateJob
  };
});
