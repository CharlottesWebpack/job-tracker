angular.module('jobTracker.changePassword', [])
    .controller('changePasswordController', function($scope, AuthFactory, $location,$rootScope) {
        $scope.data = $rootScope.userDetails;
        $scope.click = function() {
            if($scope.data.password != $scope.data.confirmpassword ){
                $scope.passwordError = "password do not match"
                return false
            }
            AuthFactory.updatePassword($scope.data)
        }
        $scope.cancel = function(){
            $location.path('/profile');
        }
                
    });