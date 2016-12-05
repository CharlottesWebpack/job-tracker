angular.module('jobTracker.login', [])
.controller('loginController', function($scope, AuthFactory, $location) {
	$scope.login = function () {
		AuthFactory.login($scope.user.username, $scope.user.password).success((res) => {
			$location.path("/mainList");
		}).error((err) => {
			$location.path("/login");
		});// body...
	}
});