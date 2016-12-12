angular.module('jobTracker.signup', [])
.controller('signupController', function($scope, AuthFactory, $location) {
  $scope.navButton = "Sign Up!";

  
  $scope.signUp = function() {
    AuthFactory.signup($scope.user)
    .then(function(data){
      $scope.error = '';
      $location.path('/login');
    }).catch(function(err) {
      $scope.error = err.data.message;
      $location.path('/signup');
    });
  };
});
