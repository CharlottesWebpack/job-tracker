angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope, JobFactory) {
  $scope.new = {}
  $scope.data = {jobs: [{
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
  }
  ]};

  $scope.getJobs = function() {
    JobFactory.getAllJobs()
    .then((res) => {
      $scope.data.jobs = res;
    })
  };

  $scope.addJob = function() {
    console.log($scope.new);
    JobFactory.createJob($scope.new)
    .then((res) => {
      $scope.data.jobs.push(res);
    });
  };

  $scope.removeJob = function() {

  };
  $scope.getJobs();
});

