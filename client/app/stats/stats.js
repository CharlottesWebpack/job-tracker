angular.module('jobTracker.stats', [])
.controller('statsController', function($scope, JobFactory, $filter, AuthFactory, $location) {
  $scope.navButton = "Sign out";
  $scope.jobs = [];
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.stats = {
    applied: 10,
    active: 0,
    noresponse: 0,
    responded: 0,
    phone: 0,
    interview: 0,
    offer: 0,
    rejected: 0
  };


  $scope.stateNow = {
    applied: 0,
    phone: 0,
    interview: 0,
    offer: 0
  };

  $scope.getStats = function() {
    JobFactory.getAllJobs()
    .then((res) => {
      $scope.jobs = res;

      ///////////////////////
      ///TOTAL AND ACTIVE///
      //////////////////////

      $scope.stats.total = $scope.jobs.length;
      $scope.stats.active = $scope.jobs.filter((job) => {
        return !job.status.rejected && job.status.progress > 1 && job.status.progress < 6;
      }).length;

      ///////////////////
      ///GENERAL STATS///
      //////////////////
      $scope.stats.applied = $scope.jobs.filter((job) => {
        return job.status.progress > 1;
      }).length;

      $scope.stats.responded = $scope.jobs.filter((job) => {
        return job.status.progress > 2;
      }).length;

      $scope.stats.noresponse = $scope.stats.applied - $scope.stats.responded;

      $scope.stats.phone = $scope.jobs.filter((job) => {
        return job.status.progress > 3;
      }).length;

      $scope.stats.interview = $scope.jobs.filter((job) => {
        return job.status.progress > 4;
      }).length;

      $scope.stats.offer = $scope.jobs.filter((job) => {
        return job.status.progress > 5;
      }).length;

      $scope.stats.rejected = $scope.jobs.filter((job) => {
        return job.status.rejected;
      }).length;

      ////////////////////
      ////CURRENT STATE///
      ////////////////////
      $scope.stateNow.applied = $scope.jobs.filter((job) => {return job.status.progress === 2}).length;
      $scope.stateNow.phone = $scope.jobs.filter((job) => {return job.status.progress === 4}).length;
      $scope.stateNow.interview = $scope.jobs.filter((job) => {return job.status.progress === 5}).length;
      $scope.stateNow.offer = $scope.jobs.filter((job) => {return job.status.progress === 6}).length;


      $scope.currentStage = [
        {value: $scope.stateNow.applied, text: "Awaiting response", type: 'danger'},
        {value: $scope.stateNow.phone, text: "Phone screen stage", type: 'warning'},
        {value: $scope.stateNow.interview, text: "Interviewing", type: 'info'},
        {value: $scope.stateNow.offer, text: "Offer", type: "success"}
      ];
    });
  }
  $scope.getStats();

});