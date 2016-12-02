angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope) {

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

  $scope.addJob = function() {

  }

  $scope.removeJob = function() {

  };

});

