angular.module('jobTracker.editProfile', [])
    .controller('editProfileController', function($scope, AuthFactory, $location, $filter, $rootScope) {

        $scope.edit = $rootScope.userDetails;

        $scope.saveeditprofile = function() {
            AuthFactory.updateAccount($scope.edit)
                //$scope.editProfile();
        }
    });