 angular.module('jobTracker.singlejobservice', [])

   .factory('uploadfileservice', function($http) {

     var upload = function(uploadUrl, file) {
       console.log(file);
       var fd = new FormData();
       fd.append('file', file);

       return $http.post(uploadUrl, fd, {
         transformRequest: angular.identity,
         headers: {
           'Content-type': undefined
         }
       }).then((res) => {
         return res.data;
       })
     };
     return {
       upload: upload
     }
   });

