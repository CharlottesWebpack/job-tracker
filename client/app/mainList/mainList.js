angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope, JobFactory, $filter, AuthFactory, $location) {
  $scope.navButton = "Sign out";
  $scope.new = {}
  $scope.jobs = [];

  $scope.interestLevels = [
    {value: 1, text: "1"},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5}
  ];
  $scope.statuses = [
    {value: "Not applied"},
    {value: "Applied"},
    {value: "Responded"},
    {value: "Phone screen"},
    {value: "In-person interview"},
    {value: "Offer"},
    {value: "Application rejected"},
    {value: "Not interested"}
  ];

  $scope.sortHeader = 'company';
  $scope.sortReverse = false;

  $scope.logout = function() {
    AuthFactory.logout();
  };

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.getJobs = function() {
    JobFactory.getAllJobs()
    .then((res) => {
      $scope.jobs = res;
      initPagination();
    })
  };

  $scope.addJob = function() {
    JobFactory.createJob($scope.new)
    .then((res) => {
      $scope.jobs = res;
      initPagination();
      $scope.new = '';
    });
  };

  $scope.removeJob = function(job) {
    JobFactory.deleteJob(job)
    .then((res) => {
      $scope.jobs = res;
      initPagination();
    })
  };
  $scope.editJob = function(job, data, field) {
    if (arguments.length > 1) {
      job[field] = data.value;
    }
    JobFactory.updateJob(job)
    .then((res) => {
      console.log(res);
    })
  };

  $scope.showDate = function(job) {
    JobFactory.formatDate(job);
  };

  $scope.showInterestLevel = function(job) {
    return JobFactory.formatInterestLevel($scope, job);
  };
  $scope.showStatus = function(job) {
    return JobFactory.formatStatus($scope, job);
  };

  //Pagination 
  $scope.currentPage = 1;
  $scope.pageSize = 2;
  $scope.totalPages = 0;
  $scope.pagedData = [];
  $scope.pageButtonDisabled = function(dir) {
    if (dir == -1) {
      return $scope.currentPage == 1;
    }
    return $scope.currentPage == $scope.totalPages;
  }


  $scope.paginate = function(nextPrevMultiplier) {
    $scope.currentPage += nextPrevMultiplier;
    $scope.pagedData = $scope.jobs.slice(
      (($scope.currentPage - 1) * $scope.pageSize), $scope.currentPage * $scope.pageSize);
  }

  $scope.first = function() {
    $scope.currentPage = 1;
    $scope.pagedData = $scope.jobs.slice((($scope.currentPage - 1) * $scope.pageSize), $scope.currentPage * $scope.pageSize);
  };

  $scope.last = function() {
    $scope.currentPage = $scope.totalPages;
    $scope.pagedData = $scope.jobs.slice((($scope.currentPage - 1) * $scope.pageSize), $scope.currentPage * $scope.pageSize);
  };

  function initPagination() {
    $scope.totalPages = Math.ceil($scope.jobs.length / $scope.pageSize);
    $scope.pagedData = $scope.jobs.slice(0, $scope.currentPage * $scope.pageSize);
  };

  $scope.getJobs();

  });