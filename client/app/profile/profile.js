angular.module('jobTracker.profile', [])
.controller('profileController', function($scope, AuthFactory, JobFactory, $location, $filter) {
  $scope.navButton = "Sign Out";
  $scope.getUser = function (){
    AuthFactory.getProfile()
    .then((res) => {
      $scope.user = res;
    });
  }

  $scope.jobStatuses = JobFactory.profileJobStatuses;

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.showJobStatus = function() {
    return JobFactory.showJobStatus($scope);
  };
  $scope.updateProfile = function() {
    console.log("update profile called")
    AuthFactory.updateAccount($scope.user);
  };

  $scope.deleteProfile = function() {
    AuthFactory.deleteAccount()
    .then(() => {
      $location.path('/');
    })
  };
  $scope.logout = function() {
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
