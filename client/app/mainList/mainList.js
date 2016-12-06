angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope, JobFactory, AuthFactory) {
  $scope.new = {}
  $scope.jobs = [{
    company: 'fakeCompany',
    job_title: 'fakeTitle',
    interest_level: 3,

    status: 'fakeStatus',
    location: 'San Francisco'
  },
  {
    company: 'fakeCompany2',
    job_title: 'fakeTitle2',
    interest_level: 4,
    status: 'fakeStatus',
    location: 'Palo Alto'
  }];

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

