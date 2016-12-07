angular.module('jobTracker.login', [])
.controller('loginController', function($scope, AuthFactory, $location) {
	$scope.login = function () {
		AuthFactory.login($scope.user)
		.then((data) => {
			$location.path("/mainList");
		}).then(function(data){
			$scope.error = '';
			console.log('this is the data from signup js', data);
			$location.path('/login');
		}).catch(function(err) {
			$scope.error = 'Incorrect username or password';
			console.log(err);
		});
	};
});
