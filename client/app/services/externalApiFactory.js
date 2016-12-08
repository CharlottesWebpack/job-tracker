angular.module('jobTracker.externalApiService', [])
.factory('externalApiFactory', function($http) {

  var APIKEY = 'AIzaSyAhdTaZTpo7M_oOAOAzQtq2F07UbVGsCxM'
  var SEARCHENGINEID = '017195158329288148085:4koogor1o1w'
  var googleUrl = 'https://www.googleapis.com/customsearch/v1'


  var searchGoogle = function() {
    console.log('in search google')
    return $http({
      method: 'GET',
      url: googleUrl,
      params: {key: APIKEY, cx: SEARCHENGINEID, q: 'kittens'}
    }).then((res) => {
      console.log('Results from google API: ', res);
    }).catch((err) => {
      console.log('Error with google API: ', err);
    })
  };

  return {
    searchGoogle: searchGoogle
  }
});