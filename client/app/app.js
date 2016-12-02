angular.module('jobTracker', [
  'ui.router',
  'jobTracker.login',
  'jobTracker.signup',
  'jobTracker.mainList',
  'jobTracker.singleJob',
  'jobTracker.authService'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/login',
      urlTemplate: 'app/login/login.html',
      controller: 'loginController'
    })
    .state('signup', {
      url: '/signup',
      urlTemplate: 'app/signup/signup.html',
      controller: 'signupController'
    })
    .state('mainList', {
      url: '/mainList',
      urlTemplate: 'app/mainlist/mainlist.html',
      controller: 'mainListController'
    })
    .state('singleJob', {
      url: '/singleJob',
      urlTemplate: 'app/singleJob/singleJob.html',
      controller: 'singleJobController'
    });
});
