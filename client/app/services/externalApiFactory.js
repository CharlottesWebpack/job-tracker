angular.module('jobTracker.externalApiService', [])
.factory('externalApiFactory', function($http) {

  var APIKEY = 'AIzaSyAhdTaZTpo7M_oOAOAzQtq2F07UbVGsCxM'
  //GET RID OF THAT BEFORE PUSHING!
  var SEARCHENGINEID = '017195158329288148085:4koogor1o1w'
  var googleUrl = 'https://www.googleapis.com/customsearch/v1'


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