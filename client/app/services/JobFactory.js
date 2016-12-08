angular.module('jobTracker.jobService', [])
.factory('JobFactory', function($http, $filter) {

  var getAllJobs = function() {
    return $http({
      method: 'GET',
      url: '/jobs'
    }).
    then(function(res) {
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
      return res;
    });
  };

  var formatDate = function(job) {
    if (typeof job.age === "string") {
      job.age = new Date(job.age);
    }
    if (!job.age) {
      job.niceDateString = "--";
    } else {
      job.niceDateString = job.age.toString().substring(0,15);
    }
  };

  var formatInterestLevel = function(scope, job) {
    var selected = $filter('filter')(scope.interestLevels, {value: job.interestLevel});
    return (job.interestLevel && selected.length) ? selected[0].value : '--';
  };

  var formatStatus = function(scope, job) {
    var selected = $filter('filter')(scope.statuses, {value: job.status});
    return (job.status && selected.length) ? selected[0].value : '--';
  };

  return {
    getAllJobs: getAllJobs,
    createJob: createJob,
    deleteJob: deleteJob,
    updateJob: updateJob,
    formatDate: formatDate,
    formatInterestLevel: formatInterestLevel,
    formatStatus: formatStatus
  };
});
