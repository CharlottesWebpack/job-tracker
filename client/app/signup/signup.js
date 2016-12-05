angular.module('jobTracker.signup', [])
.controller('signupController', function($scope, AuthFactory, $location) {

  	$scope.signup = function() {
  		console.log($scope.user.username, $scope.username)
  		AuthFactory.signup($scope.user.username, $scope.user.password).success((res) => {
  			$location.path("/mainList");
  		});
  	};
});