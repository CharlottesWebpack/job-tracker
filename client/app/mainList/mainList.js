angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope, JobFactory, $filter, AuthFactory) {
  $scope.new = {}
  $scope.jobs = [];

  $scope.interestLevels = [
    {value: 1, text: "1"},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5}
  ];
  $scope.statuses = [
    {value: "Not applied"},
    {value: "Applied"},
    {value: "Responded"},
    {value: "Phone screen"},
    {value: "In-person interview"},
    {value: "Offer"},
    {value: "Application rejected"},
    {value: "Not interested"}
  ];

  $scope.sortHeader = 'company';
  $scope.sortReverse = false;

  $scope.logout = function() {
    AuthFactory.logout();
  }

  $scope.getJobs = function() {
    JobFactory.getAllJobs()
    .then((res) => {
      console.log(res);
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
  $scope.editJob = function(job, data, field) {
    if (arguments.length > 1) {
      job[field] = data.value;
    }
    JobFactory.updateJob(job)
    .then((res) => {
      console.log(res);
    })
  };

  $scope.showDate = function(job) {
    JobFactory.formatDate(job);
  };

  $scope.showInterestLevel = function(job) {
    return JobFactory.formatInterestLevel($scope, job);
  };
  $scope.showStatus = function(job) {
    return JobFactory.formatStatus($scope, job);
  };
  $scope.getJobs();
});

