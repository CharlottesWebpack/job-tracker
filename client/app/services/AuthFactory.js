angular.module('jobTracker.authService', [])
.factory('AuthFactory', function($http, $location) {
  var errorMessage = "";
  var login = function(user){
    return $http({
      method: 'POST',
      url: '/login',
      contentType : "application/json",
      data: user
    });
  };

  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/signup',
      contentType : "application/json",
      data: user
    });
  };

  var logout = function() {
    return $http({
      method: 'GET',
      url: '/logout'
    }).then((res) => {
      $location.path('/login');
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  return {
    login: login,
    logout: logout,
    signup: signup
  };

});
