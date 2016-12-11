angular.module('jobTracker.profileDir', [])
.directive('changePassword', function(){
  return {
    transclude: true,
    restrict: 'E',
    templateUrl: 'app/profile/changePassword.html'
  }
})