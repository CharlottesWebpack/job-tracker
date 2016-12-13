angular.module('jobTracker.demo', [])
.controller('demoController', function($scope, JobFactory, DemoFactory, StatsFactory, AuthFactory, $location) {
  $scope.demo = true;
  $scope.navButton = "Sign Up!";
  $scope.new = {};

  $scope.pagedData = DemoFactory.jane.jobList;
  $scope.user = DemoFactory.jane;
  $scope.jobs = $scope.pagedData;

  $scope.sortHeader = 'company';
  $scope.sortReverse = false;
  $scope.news = {};

  $scope.statuses = JobFactory.statuses;
  $scope.interestLevels = JobFactory.interestLevels;
  $scope.jobStatuses = AuthFactory.profileJobStatuses;

  $scope.stats = StatsFactory.stats;
  $scope.stateNow = StatsFactory.stateNow;

  $scope.buttonFunc = function() {
    $location.path("/signup");
  }

  $scope.addJob = function() {
    var newJob = $scope.new;
    $scope.pagedData.push(newJob);
    $scope.new = '';
  };
  $scope.getJobs = function(jobs) {
    $scope.pagedData = jobs;
  };

  $scope.removeJob = function(job) {
    JobFactory.openRemove(job, $scope);
  };

  $scope.editJob = function(job, data, field) {
    if (arguments.length > 1) {
      job[field] = data.value;
    }
  };

  $scope.getNews = function(job) {
    JobFactory.getNews(job, $scope);
  };

  $scope.showDate = function(job) {
    JobFactory.formatDate(job);
  }

  $scope.showInterestLevel = function(job) {
    return JobFactory.formatInterestLevel($scope, job);
  };
  $scope.showStatus = function(job) {
    return JobFactory.formatStatus($scope, job);
  };
  $scope.showJobStatus = function() {
    return AuthFactory.showJobStatus($scope);
  };
  $scope.deleteProfile = function() {
    $location.path('/');
  };
  $scope.getStats = function() {
    StatsFactory.calculateStats($scope);
  }
  $scope.getStats();
})
