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
      $location.path('/');
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
  var getProfile = function() {
    return $http({
      method: 'GET',
      url: '/users',
    }).then((res) => {
      console.log("GOT USER", res.data)
      return res.data;
      }, (err) => {
      console.error("ERROR:", err);
    });
  }

  var updateAccount = function(user) {
    return $http({
      method: 'PUT',
      url: '/users',
      data: user,
    }).then((res) => {
      console.log(res);
      return res.data;
    },(err) => {
      console.error("ERROR:", err);
    });
  };

  var updatePassword = function(user) {
    return $http({
      method: 'PUT',
      url: '/users/password',
      data: user
      }).then((res) => {
      console.log(res);
      $location.path('/profile');

    });
  };
  var deleteAccount = function() {
    return $http({
      method: 'POST',
      url: '/users/delete',
    }).then((res) => {
      console.log(res);
      $location.path('/');
    });
  };

  return {
    login: login,
    logout: logout,
    signup: signup,
    isAuth: isAuth,
    updateAccount: updateAccount,
    updatePassword: updatePassword,
    deleteAccount: deleteAccount,
    getProfile: getProfile
  };

});
