angular.module('jobTracker.jobService', [])
.factory('JobFactory', function($http, $filter, externalApiFactory, $uibModal) {

  var getAllJobs = function() {
    return $http({
      method: 'GET',
      url: '/jobs'
    }).
    then(function(res) {
      return res.data; //this is an array of job objects
    });
  };

  var createJob = function(job) {
    return $http({
      method: 'POST',
      url: '/jobs',
      data: job
    }).then((res) => {
      return res.data.jobList;
    })
  };
  var openRemove = function(job, scope){
    scope.jobToRemove = job;
    $uibModal.open({
      templateUrl: 'app/mainList/removeModal/removeModal.html',
      controller: 'removeModalController',
      controllerAs: '$remove',
      resolve: {
        job: function () {
          return scope.jobToRemove;
        },
        getJobs: function () {
          return scope.getJobs;
        },
        demo: function() {
          return scope.demo;
        }
      }
    });
  }
  var deleteJob = function(job) {
    return $http({
      method: 'POST',
      url: '/jobs/delete',
      data: job,
      contentType: 'application/json'
    }).then((res) => {
      return res.data.jobList;
    })
    .catch((err) => {
      console.log("ERR", err);
    });
  };

  var updateJob = function(job) {
    return $http({
      method: 'PUT',
      url: '/jobs',
      data: job
    }).then((res) => {
      return res;
    });
  };

  var formatDate = function(job) {
    if (typeof job.age === "string") {
      job.age = new Date(job.age);
    }
    if (!job.age) {
      job.niceDateString = "--";
    } else {
      job.niceDateString = job.age.toString().substring(0,15);
    }
  };

  var getNews = function (job, scope) {
    console.log(job);
    return externalApiFactory.searchGoogle(job.company)
    .then(function(data) {
      //data.items is array of news story objects
      scope.news.stories = data.data;
    })
    .then(function(){
      $uibModal.open({
        templateUrl: 'app/mainList/getNews/getNews.html',
        controller: 'getNewsController',
        controllerAs: '$ctrl',
        resolve: {
          news: function() {
            return scope.news;
          }
        }
      });
    });
  };

  var interestLevels = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5}
  ];
  var statuses = [
    {value: {progress: 1}, text: "Application Not Submitted"},
    {value: {progress: 2}, text: "Application Submitted"},
    {value: {progress: 3}, text: "Company Responded"},
    {value: {progress: 4}, text: "Phone Screen Scheduled"},
    {value: {progress: 5}, text: "In-person Interview Scheduled"},
    {value: {progress: 6}, text: "Offer Received"},
    {value: {rejected: true}, text: "Application Rejected"}
  ];

  var formatInterestLevel = function(scope, job) {
    var selected = $filter('filter')(interestLevels, {value: job.interestLevel});
    return selected[0].value;
  };

  var formatStatus = function(scope, job) {
    var selected = statuses.filter((status) => {
      if (job.status.rejected){
        return  status.value.rejected;
      }
      return status.value.progress === job.status.progress;
    })
    return selected[0].text;
  };
  var upload = function(uploadUrl, file) {
   console.log(file);
       var fd = new FormData();
       fd.append('file', file);

    return $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
          headers: {
           'Content-type': undefined
          }
    }).then((res) => {
         return res.data;
      })
  };

  return {
    getAllJobs: getAllJobs,
    createJob: createJob,
    deleteJob: deleteJob,
    updateJob: updateJob,
    upload:upload,
    formatDate: formatDate,
    formatInterestLevel: formatInterestLevel,
    formatStatus: formatStatus,
    statuses: statuses,
    interestLevels: interestLevels,
    getNews: getNews,
    openRemove: openRemove
  };

});
