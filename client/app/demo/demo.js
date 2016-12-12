angular.module('jobTracker.demo', [])
.controller('demoController', function($scope, $filter, JobFactory, $location) {
  $scope.navButton = "Sign Up!";
  $scope.new = {}
  $scope.pagedData = [
    {"company":"khan academy",
      "jobTitle":"dev",
      "location":"montain view",
      "age":null,
      "id":"rJCuH0mXl",
      "_id":"58465576ba0e891b7136a192",
      "contactInfo":"c@c",
      "status":"Not applied",
      "interestLevel":5},
    {"company":"google",
      "jobTitle":"job",
      "age":"2016-12-09T08:00:00.000Z",
      "id":"H1x6NcE7l",
      "_id":"584714b71e12fa1e7b3ced79",
      "status":"Not applied",
      "interestLevel":1},
    {"company":"Facebook",
      "jobTitle":"software engineer",
      "location":"palo alto",
      "jobLink":"facebook.com",
      "notes":"very cool job",
      "age":"2016-12-10T08:00:00.000Z",
      "id":"H17VUMIXx",
      "_id":"5848962b0eafb92a54f449f8",
      "status":"Applied",
      "interestLevel":3},
    {"company":"twitter",
      "jobTitle":"junior developer",
      "location":"san francisco",
      "age":null,
      "id":"B12H8zIXx",
      "_id":"584896440eafb92a54f449f9",
      "status":"Not applied",
      "interestLevel":5}];

  $scope.sortHeader = 'company';
  $scope.sortReverse = false;

  $scope.statuses = JobFactory.statuses;
  $scope.interestLevels = JobFactory.interestLevels;

  $scope.buttonFunc = function() {
    $location.path("/signup");
  }

  $scope.addJob = function() {
    var newJob = $scope.new;
    $scope.pagedData.push(newJob);
    $scope.new = '';
  };

  $scope.removeJob = function(job) {
    $scope.pagedData = $scope.pagedData
      .filter((item) => {return item.id !== job.id;})
  };

  $scope.editJob = function(job, data, field) {
    if (arguments.length > 1) {
      job[field] = data.value;
    }
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
})
