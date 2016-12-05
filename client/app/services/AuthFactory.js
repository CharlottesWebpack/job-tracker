angular.module('jobTracker.authService', [])
.factory('AuthFactory', function($http, $location) {

  var login = function(username, password, authMethod){

    return $http({
      method: 'POST',
      url: '/login',
      contentType : "Application/JSON",
      data: {
        //auth: authMethod,
        username: username,
        password: password
      }
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
      contentType : "Application/JSON",
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
