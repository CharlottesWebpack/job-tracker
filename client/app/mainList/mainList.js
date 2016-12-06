angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope, JobFactory) {
  $scope.new = {}
  $scope.jobs = [];

  $scope.getJobs = function() {
    JobFactory.getAllJobs()
    .then((res) => {
      $scope.jobs = res;
    })
  };

  $scope.addJob = function() {
    JobFactory.createJob($scope.new)
    .then((res) => {
      $scope.jobs = res;
    });
  };

  $scope.removeJob = function(job) {
    JobFactory.deleteJob(job)
    .then((res) => {
      $scope.jobs = res;
    })
  };
  $scope.editJob = function() {

  };
  $scope.getJobs();
});

