angular.module('jobTracker.stats', [])
.controller('StatsController', function($scope, $location) {

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

});