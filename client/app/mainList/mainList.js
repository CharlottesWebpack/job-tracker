angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope, JobFactory, AuthFactory) {
  $scope.new = {}
  $scope.jobs = [];

  $scope.logout = function() {
    AuthFactory.logout();
  }

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
      $scope.new = '';
    });
  };

  $scope.removeJob = function(job) {
    JobFactory.deleteJob(job)
    .then((res) => {
      $scope.jobs = res;
    })
  };
  $scope.editJob = function(job) {
    JobFactory.updateJob(job)
    .then((res) => {
      console.log(res);
    })
  };
  $scope.getJobs();
});

