angular.module('jobTracker.landing', [])
.controller('landingController', function($scope) {
  $scope.navButton = "Sign Up!";
})
.directive('landingDir', () => {
  return {
    transclude: true,
    restrict: 'E',
    templateUrl: 'app/main/main.html'
  }
})