angular.module('jobTracker.externalApiService', [])
.factory('externalApiFactory', function($http) {

  var searchGoogle = function(company) {
    return $http({
      method: 'GET',
      url: '/getNews',
      params: {
        company: company
      }
    });
  };

  return {
    searchGoogle: searchGoogle
  };
});
