angular.module('jobTracker.landing', [])
.controller('landingController', function($scope, $location) {
  $scope.navButton = "Sign Up!";

  $scope.buttonFunc = function() {
    $location.path("/signup");
  };

})
.directive('landingDir', () => {
  return {
    transclude: true,
    restrict: 'E',
    templateUrl: 'app/main/main.html'
  }
})