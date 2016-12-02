angular.module('jobTracker', [
  'ui.router',
  'jobTracker.login',
  'jobTracker.signup',
  'jobTracker.mainList',
  'jobTracker.singleJob',
  'jobTracker.authService',
  'jobTracker.jobService',
  'navDirective'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/mainList');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'loginController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'signupController'
    })
    .state('mainList', {
      url: '/mainList',
      templateUrl: 'app/mainList/mainList.html',
      controller: 'mainListController'
    })
    .state('singleJob', {
      url: '/singleJob',
      templateUrl: 'app/singleJob/singleJob.html',
      controller: 'singleJobController'
    });
});
