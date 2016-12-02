angular.module('jobTracker.singleJob', [])
.controller('singleJobController', function($scope) {

})
.directive('singleJobDirective', function(){
  return {
    transclude: true,
    restrict: 'E'
    templateUrl: 'app/singleJob/singleJob.html'
  }
})