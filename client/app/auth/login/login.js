angular.module('jobTracker.login', [])
.controller('loginController', function($scope, AuthFactory, $location, $rootScope) {
	$scope.login = function () {
		AuthFactory.login($scope.user)
		.then((data) => {
			$rootScope.userDetails=data.data;
			console.log(data.data)
			$location.path("/mainList");
		}).catch(function(err) {
			$scope.error = 'Incorrect username or password';
			console.log(err);
		});
	};
});
