var request = require('request');
var googleConfig = require('../../configGoogle.js');

var googleSearch = function(company) {
  return new Promise(function(resolve, reject) {
    request({
      'url': googleConfig.GOOGLE_API_URL,
      'qs': {
        'key': googleConfig.API_KEY,
        'cx': googleConfig.SEARCH_ENGINE_ID,
        'q': company,
        'type': 'application/json'
      }
    }, function(error, response, body) {
      if(error) {
        reject(error);
      }else {
        resolve(Buffer(body).toString());
      }
    });
  });
};


module.exports = googleSearch;
