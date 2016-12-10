angular.module('jobTracker', [
  'xeditable',
  'ui.router',
  'jobTracker.login',
  'jobTracker.signup',
  'jobTracker.mainList',
  'jobTracker.authService',
  'jobTracker.jobService',
  'jobTracker.directives',
  'jobTracker.externalApiService',
  'validation.match',
  'jobTracker.stats',
  'navDirective',
  'jobTracker.demo',
  'jobTracker.getNews',
  'ui.bootstrap',
  'jobTracker.removeModal',
  'jobTracker.config'
])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login/login.html',
      controller: 'loginController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/auth/signup/signup.html',
      controller: 'signupController'
    })
    .state('demo', {
      url: '/demo',
      templateUrl: 'app/demo/demo.html',
      controller: 'demoController'
    })
    .state('mainList', {
      url: '/mainList',
      templateUrl: 'app/mainList/mainList.html',
      authRequired : true,
      controller: 'mainListController'
    })
    .state('stats', {
      url: '/stats',
      templateUrl: 'app/stats/stats.html',
      controller: 'statsController',
      authRequired : true
    });
  $urlRouterProvider.otherwise('/demo');
  //this being set to /login is causing the auto redirect to login on a bad singup request - NWF
  //something weird happens when you try to login if this is
  //anything other than /login. It renders that page first for a second. - VE
})
.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
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
