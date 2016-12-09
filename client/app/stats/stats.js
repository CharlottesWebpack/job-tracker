angular.module('jobTracker.stats', [])
.controller('statsController', function($scope, JobFactory, $filter, AuthFactory, $location) {

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.navButton = "Sign out";
  $scope.jobs = [];
  $scope.stats = {};

  $scope.getJobs = function() {
    JobFactory.getAllJobs()
    .then((res) => {
      $scope.jobs = res;
      $scope.stats.total = $scope.jobs.length;

      $scope.stats.applied = $scope.jobs.filter((job) => {
        return job.status.progress > 1;
      });

      $scope.stats.notApplied = $scope.stats.total - $scope.stats.applied.length

      $scope.stats.active = $scope.jobs.filter((job) => {
        return !job.status.rejected && job.status.progress > 1;
      });

      $scope.stats.responded = $scope.jobs.filter((job) => {
        return job.status.progress > 2;
      });

      $scope.stats.phone = $scope.jobs.filter((job) => {
        return job.status.progress > 3;
      })

       $scope.stats.interview = $scope.jobs.filter((job) => {
        return job.status.progress > 4;
      })

       $scope.stats.offer = $scope.jobs.filter((job) => {
        return job.status.progress > 5;
      })

      $scope.stats.rejected = $scope.jobs.filter((job) => {
        return job.status.rejected;
      })

    });
  }
  $scope.getJobs();

});