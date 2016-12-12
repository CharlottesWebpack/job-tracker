angular.module('jobTracker.login', [])
.controller('loginController', function($scope, AuthFactory, $location) {
	 $scope.navButton = "Sign Up!";

  $scope.buttonFunc = function() {
    $location.path("/signup");
  }

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.login = function () {
		AuthFactory.login($scope.user)
		.then((data) => {
			$location.path("/mainList");
		}).catch(function(err) {
			$scope.error = 'Incorrect username or password';
			console.log(err);
		});
	};
});
