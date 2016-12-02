angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope) {
  
  $scope.data = {jobs: [{
    company: 'fakeCompany',
    job_title: 'fakeTitle',
    interest_level: 3,
    status: 'fakeStatus'
  }]};

  $scope.addJob = function() {

  }

  $scope.removeJob = function() {

  };


});

