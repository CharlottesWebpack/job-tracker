angular.module('jobTracker.signup', [])
.controller('signupController', function($scope, AuthFactory, $location) {
  $scope.signUp = function() {
    AuthFactory.signup($scope.user);
  };
});