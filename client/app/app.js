angular.module('jobTracker', [
  'ui.router',
  'mainListController'
  //need to add in our other modules as we create them!
])
.config(function($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise('/');
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