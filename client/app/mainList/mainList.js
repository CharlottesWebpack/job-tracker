angular.module('jobTracker.mainList', [])
.controller('mainListController', function($scope, JobFactory, $filter, AuthFactory, $location, externalApiFactory, $uibModal) {
  $scope.navButton = "Sign out";
  $scope.new = {};
  $scope.jobs = [];
  $scope.news = [];

  $scope.statuses = JobFactory.statuses;
  $scope.interestLevels = JobFactory.interestLevels;

  $scope.sortHeader = 'interestLevel';
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
      console.log(res)
      $scope.jobs = res;
      initPagination();
    })
  };

  $scope.addJob = function() {
    $scope.new.createdAt = new Date();
    JobFactory.createJob($scope.new)
    .then((res) => {
      $scope.jobs = res;
      initPagination();
      $scope.new = '';
    });
  };

  $scope.removeJob = function(job) {
    $scope.jobToRemove = job;
    $uibModal.open({
      templateUrl: 'app/mainList/removeModal/removeModal.html',
      controller: 'removeModalController',
      controllerAs: '$remove',
      resolve: {
        job: function () {
          return $scope.jobToRemove;
        },
        getJobs: function () {
          return $scope.getJobs;
        }
      }
    });
  };
  $scope.editJob = function(job, data) {
    if (data) {
      job.updatedAt = new Date();
    }
    JobFactory.updateJob(job);
  };

  $scope.getNews = function(job) {
    externalApiFactory.searchGoogle(job.company)
    .then(function(data) {
      //data.items is array of news story objects
      $scope.news.stories = data.data;
    })
    .then(function(){
      $uibModal.open({
        templateUrl: 'app/mainList/getNews/getNews.html',
        controller: 'getNewsController',
        controllerAs: '$ctrl',
        resolve: {
          news: function() {
            return $scope.news;
          }
        }
      });
    });
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
  $scope.pageSize = 10;
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
  $scope.addFile = function() {

      var file = this.myfile;
      console.log(file);
      var uploadUrl = '/upload';
      JobFactory.upload(uploadUrl, file);
      angular.element("input[type= 'file']").val(null);
  };

});
