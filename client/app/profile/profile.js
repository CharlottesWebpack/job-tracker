angular.module('jobTracker.profile', [])
.controller('profileController', function($scope, AuthFactory, JobFactory, $location, $filter, $uibModal) {
  $scope.navButton = "Sign Out";
  $scope.getUser = function (){
    AuthFactory.getProfile()
    .then((res) => {
      $scope.user = res;
    });
  }

  $scope.jobStatuses = AuthFactory.profileJobStatuses;

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.showJobStatus = function() {
    return AuthFactory.showJobStatus($scope);
  };
  $scope.updateProfile = function() {
    AuthFactory.updateAccount($scope.user);
  };

  $scope.deleteProfile = function() {
    console.log("deleteProfile called in controller")
    $uibModal.open({
      templateUrl: 'app/profile/deleteModal.html',
      controller: 'deleteAccountController',
      controllerAs: '$delete',
      resolve: {
        user: function () {
          return $scope.user;
        }
      }
    });
  };
  $scope.buttonFunc = function() {
    AuthFactory.logout();
  };

  $scope.cancelPasswordChange = function() {
    $scope.changePass = '';
    $scope.showChangePassword = false;
  };
  $scope.changePassword = function() {

  };
  $scope.getUser();
});
