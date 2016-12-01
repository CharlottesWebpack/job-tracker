angular.module('jobTracker', [
  'ui.router',
  //need to add in our other modules as we create them!
])
.config(function($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise('/');
  $stateProvider
    .state('login', {
      url: '/login',
      urlTemplate: 'app/login/login.html',
      controller: 'INSERT CONTROLLER NAME HERE'
    })
    .state('signup', {
      url: '/signup',
      urlTemplate: 'app/signup/signup.html',
      controller: 'INSERT CONTROLLER NAME HERE'
    })
    .state('mainList', {
      url: '/mainList',
      urlTemplate: 'app/mainlist/mainlist.html',
      controller: 'INSERT CONTROLLER NAME HERE'
    })
    .state('singleJob', {
      url: '/singleJob',
      urlTemplate: 'app/singleJob/singleJob.html',
      controller: 'INSERT CONTROLLER NAME HERE'
    });
});