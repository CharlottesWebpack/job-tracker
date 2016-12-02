angular.module('navDirective', [])
.directive('navBar', function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'app/navbar/navbar.html',
  }
});