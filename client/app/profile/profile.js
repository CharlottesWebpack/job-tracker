angular.module('jobTracker.profile', [])
.controller('profileController', function($scope, AuthFactory, $location, $filter) {
  $scope.navButton = "Sign Out";
  $scope.getUser = function (){
    AuthFactory.getProfile()
    .then((res) => {
      $scope.user = res;
    });
  }

  $scope.jobStatuses = [
    {value: 1, text: "Actively looking for a job"},
    {value: 2, text: "Found a job"},
    {value: 3, text: "Not actively looking for a job"}
  ];
  
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.showJobStatus = function() {
    var selected = $filter('filter')($scope.jobStatuses, {value: $scope.user.jobStatus});
    return selected[0].text;
  };
  $scope.updateProfile = function() {
    console.log("update profile called");
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
  $scope.getUser();
});
