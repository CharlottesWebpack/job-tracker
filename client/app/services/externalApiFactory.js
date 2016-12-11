angular.module('jobTracker.externalApiService', [])
.factory('externalApiFactory', function($http, GOOGLE_API_URL, SEARCH_ENGINE_ID, API_KEY) {

  var APIKEY = API_KEY;
  var SEARCHENGINEID = SEARCH_ENGINE_ID;
  var googleUrl = GOOGLE_API_URL;


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
