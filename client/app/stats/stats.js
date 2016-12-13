angular.module('jobTracker.stats', [])
.controller('statsController', function($scope, $location, JobFactory, StatsFactory) {
  $scope.navButton = "Sign out";
  $scope.jobs = [];

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.stats = StatsFactory.stats;
  $scope.stateNow = StatsFactory.stateNow;

  $scope.getStats = function() {
    JobFactory.getAllJobs()
    .then((res) => {
      $scope.jobs = res;
      StatsFactory.calculateStats($scope);
    });
  }
  $scope.getStats();

});