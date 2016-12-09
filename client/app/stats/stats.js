angular.module('jobTracker.stats', [])
.controller('statsController', function($scope, JobFactory, $filter, AuthFactory, $location) {

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.navButton = "Sign out";
  $scope.jobs = [];
  $scope.stats = {};

//   <li>Jobs Total:{{stats.total}}</li>
//   <li>Jobs Active:{{stats.active}}</li>
//   <li>Jobs Interested:{{stats.interested}}</li>
//   <li>Jobs Applied: {{stats.applied}}</li>
//   <li>Jobs Responded: {{stats.responded}}</li>
//   <li>Jobs PhoneScreen: {{stats.phone}}</li>
//   <li>Jobs Interview: {{stats.interview}}</li>
//   <li>Jobs Offer: {{stats.offer}}</li>
//   <li>Jobs Rejected: {{stats.rejected}}</li>

    // {value: "Not applied"},
    // {value: "Applied"},
    // {value: "Responded"},
    // {value: "Phone screen"},
    // {value: "In-person interview"},
    // {value: "Offer"},
    // {value: "Application rejected"},


  $scope.getJobs = function() {
    JobFactory.getAllJobs()
    .then((res) => {
      $scope.jobs = res;
      $scope.stats.total = $scope.jobs.length;

      $scope.stats.applied = $scope.jobs.filter((job) => {
        return job.status !== "Not applied"
      });

      $scope.stats.active = $scope.jobs.applied.filter((job) => {
        return job.status !== "Application rejected"
      });

      $scope.stats.responded = $scope.jobs.applied.filter((job) => {
        return job.status !== "Applied"
      }).length;

      $scope.stats.phone = $scope.jobs.responded.filter((job) => {
        return job.status !== "Responded";
      }).length;

      $scope.stats.interview = $scope.jobs.filter((job) => {
      }).length;

      $scope.stats.offer = $scope.jobs.filter((job) => {
      }).length;

      $scope.stats.rejected = $scope.jobs.filter((job) => {
      }).length;

    });
  }
  $scope.getJobs();

});