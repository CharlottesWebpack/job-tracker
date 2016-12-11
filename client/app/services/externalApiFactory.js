angular.module('jobTracker.externalApiService', [])
.factory('externalApiFactory', function($http, GOOGLE_API_URL, SEARCH_ENGINE_ID, API_KEY) {

  var APIKEY = process.env.API_KEY || API_KEY;
  var SEARCHENGINEID = process.env.SEARCH_ENGINE_ID || SEARCH_ENGINE_ID;
  var googleUrl =  process.env.GOOGLE_API_URL || GOOGLE_API_URL;


  var searchGoogle = function(company) {
    return $http({
      method: 'GET',
      url: googleUrl,
      params: {key: APIKEY, cx: SEARCHENGINEID, q: company}
    }).then((res) => {
      console.log('in search google', res)
      return res.data;
    }).catch((err) => {
      console.log('Error with google API: ', err);
    });
  };

  return {
    searchGoogle: searchGoogle
  }
});
