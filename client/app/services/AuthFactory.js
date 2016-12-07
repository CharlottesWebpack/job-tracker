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
    // .then((res) => {
    //   console.log(res.data);
    //   return res.data;
    // }, (err) => {
    //   console.error("ERROR:", err);
    // });
  };

  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/signup',
      contentType : "application/json",
      data: user
    });
    //this is not the correct way to hadnle errors with promises and was causing
    //issues on errors. This 'then' functionality has been moved to signup line 5 - 9.
    // .then((res) => {
    //   return res.data;
    // }, (err) => {
    //   console.error("ERROR:", err);
    // });
  };

  var logout = function() {
    return $http({
      method: 'GET',
      url: '/logout'
    })
  }

  return {
    login: login,
    logout: logout,
    signup: signup
  }

})
