angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope) {

  $scope.data = {jobs: [{
    company: 'fakeCompany',
    job_title: 'fakeTitle',
    interest_level: 3,
<<<<<<< HEAD
    status: 'fakeStatus'
=======
    status: 'fakeStatus',
    location: 'San Francisco'
>>>>>>> develop
  },
  {
    company: 'fakeCompany2',
    job_title: 'fakeTitle2',
    interest_level: 4,
<<<<<<< HEAD
    status: 'fakeStatus'
=======
    status: 'fakeStatus',
    location: 'Palo Alto'
>>>>>>> develop
  }
  ]};

  $scope.addJob = function() {

  }

  $scope.removeJob = function() {

  };

});

