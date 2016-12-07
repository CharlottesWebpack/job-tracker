angular.module('jobTracker.signup', [])
.controller('signupController', function($scope, AuthFactory, $location) {
  $scope.error = AuthFactory.errorMessage;
  	$scope.signUp = function() {
  		// console.log($scope.user);
  		AuthFactory.signup($scope.user)
      .then(function(data){
        $scope.error = '';
        console.log('this is the data from signup js', data);
  			$location.path('/login');
  		}).catch(function(err) {
        AuthFactory.errorMessage = err.data.message;
        console.log(err);
        $location.path('/signup');
      });
  	};
});
