angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope) {

  $scope.data = {jobs: [{
    company: 'fakeCompany',
    job_title: 'fakeTitle',
    interest_level: 3,
    status: 'fakeStatus'
  },
  {
    company: 'fakeCompany2',
    job_title: 'fakeTitle2',
    interest_level: 4,
    status: 'fakeStatus'
  }
  ]};

  $scope.addJob = function() {

  }

  $scope.removeJob = function() {

  };

});

