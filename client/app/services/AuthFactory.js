angular.module('jobTracker.authService', [])
.factory('AuthFactory', function($http, $location) {

  var login = function(username, password, authMethod){
    return $http({
      method: 'POST',
      url: '/login',
      data: {
        auth: authMethod,
        username: username,
        password: password
      }
    }).then((res) => {
      return res.data;
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  var signup = function(){
    return $http({
      method: 'POST',
      url: '/signup',
      data: {
        //auth: authMethod,
        username: username,
        password: password
      }
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
