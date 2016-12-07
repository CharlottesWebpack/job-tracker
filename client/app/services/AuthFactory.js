angular.module('jobTracker.authService', [])
.factory('AuthFactory', function($http, $location) {

  var login = function(user){
    return $http({
      method: 'POST',
      url: '/login',
      contentType : "application/json",
      data: user
    }).then((res) => {
       $location.path('/mainList');
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/signup',
      contentType : "application/json",
      data: user
    }).then((res) => {
        $location.path('/login'); 
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  var logout = function() {
    return $http({
      method: 'GET',
      url: '/logout'
    }).then((res) => {
      $location.path('/login')
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  var isAuth = function() {
    return $http({
      method: 'GET',
      url: '/auth'
    }).then((res) => {
      return res.data;
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  return {
    login: login,
    logout: logout,
    signup: signup,
    isAuth: isAuth
  }

})
