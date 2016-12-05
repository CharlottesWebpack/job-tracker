angular.module('jobTracker.login', [])
.controller('loginController', function($scope, AuthFactory, $location) {
	$scope.login = function () {
		AuthFactory.login($scope.user.username, $scope.user.password).then((data)=> {
			$location.path("/mainList");
		});
	};
});