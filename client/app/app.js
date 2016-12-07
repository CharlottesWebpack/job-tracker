angular.module('jobTracker', [
  'xeditable',
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
      controller: 'mainListController',
      authRequired : true
    });
  $urlRouterProvider.otherwise('/mainList');
  //this being set to /login is causing the auto redirect to login on a bad singup request - NWF
  //something weird happens when you try to login if this is
  //anything other than /login. It renders that page first for a second. - VE
})
.run(function($rootScope, $location, AuthFactory) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    AuthFactory.isAuth()
    .then(function(authenticated) {
      if(toState.authRequired && !authenticated) {
        $location.path('/login');
      }
    });
  });
});
