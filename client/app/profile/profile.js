angular.module('jobTracker.profile', [])
    .controller('profileController', function($scope, AuthFactory, $location, $rootScope) {
        $scope.userDetails = $rootScope.userDetails
        $scope.editProfile = function() {
            $location.path('/editProfile');
        }

        $scope.changePassword = function() {
            $location.path('/changePassword');
        }

        $scope.exportJobList = function() {
            $location.path('');
        }

    });