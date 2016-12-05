angular.module('jobTracker.authService', [])
.factory('AuthFactory', function($http, $location) {

  var login = function(user){

    return $http({
      method: 'POST',
      url: '/login',
      contentType : "application/json",
      data: user
    }).then((res) => {
      console.log(res.data);
      return res.data;
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  var signup = function(user){
    console.log(user);
    return $http({
      method: 'POST',
      url: '/signup',
      contentType : "application/json",
      data: user
    }).then((res) => {
      return res.data;
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  return {
    login: login,
    signup: signup
  }

})
