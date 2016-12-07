angular.module('jobTracker.landing', [])
.directive('landingDir', () => {
  return {
    transclude: true,
    restrict: 'E',
    templateUrl: 'app/main/main.html'
  }
})