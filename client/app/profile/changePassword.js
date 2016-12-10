angular.module('jobTracker.changePassword', [])
    .controller('changePasswordController', function($scope, AuthFactory, $location) {
        $scope.click = function() {
            AuthFactory.login($scope.user)
                .then((data) => {
                    $location.path("/mainList");
                }).catch(function(err) {
                    $scope.error = 'Incorrect username or password';
                    console.log(err);
                });
        };
    });