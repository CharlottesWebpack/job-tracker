angular.module('jobTracker.singleJob', [])
.directive('singleJobDir', function(){
  return {
    transclude: true,
    restrict: 'E',
    templateUrl: 'app/singleJob/singleJob.html'
  }
})