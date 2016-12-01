angular.module('jobTracker.auth', [])
.factory('AuthFactory', function($http, $location) {
  var login = function(username, password, authMethod){
    return $http({
      method: 'GET',
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
  var signup = function(){};
  var logout = function(){

  };
  return {
    login: login,
    signup: signup,
    logout: logout
  }
})