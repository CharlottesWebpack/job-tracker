angular.module('jobTracker.externalApiService', [])
.factory('externalApiFactory', function($http) {

  var APIKEY = '';
  var SEARCHENGINEID = '';
  var googleUrl =  '';


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
    })
  };

  return {
    searchGoogle: searchGoogle
  }
});