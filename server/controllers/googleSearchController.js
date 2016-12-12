var request = require('request');

var googleSearch = function(company) {
  return new Promise(function(resolve, reject) {
    request({
      'url': process.env.GOOGLE_API_URL,
      'qs': {
        'key': process.env.API_KEY,
        'cx': process.env.SEARCH_ENGINE_ID,
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
