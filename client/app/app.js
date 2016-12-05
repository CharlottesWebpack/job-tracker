angular.module('jobTracker', [
  'ui.router',
  'jobTracker.login',
  'jobTracker.signup',
  'jobTracker.mainList',
  'jobTracker.authService',
  'jobTracker.jobService',
  'jobTracker.directives',
  'navDirective'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/',
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
    });
});
