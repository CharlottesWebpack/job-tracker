angular.module('jobTracker', [
  'xeditable',
  'ui.router',
  'jobTracker.login',
  'jobTracker.signup',
  'jobTracker.mainList',
  'jobTracker.profile',
  'jobTracker.profileDir',
  'jobTracker.authService',
  'jobTracker.jobService',
  'jobTracker.directives',
  'validation.match',
  'jobTracker.stats',
  'jobTracker.externalApiService',
  'navDirective',
  'jobTracker.demo',
  'jobTracker.getNews',
  'ui.bootstrap',
  'jobTracker.removeModal'
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
    .state('landing', {
      url: '/landing',
      templateUrl: 'app/demo/landing.html'
    })
    .state('demo', {
      url: '/demo',
      templateUrl: 'app/mainList/mainList.html',
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
      authRequired: true
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/profile/profile.html',
      controller: 'profileController',
      authRequired : true
    });
  $urlRouterProvider.otherwise('/login');
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
