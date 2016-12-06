angular.module('jobTracker.signup', [])
.controller('signupController', function($scope, AuthFactory, $location) {
  	$scope.signUp = function() {
  		console.log($scope.user);
  		AuthFactory.signup($scope.user).then(function(data){
  			$location.path('/login');
  		});
  	};
});