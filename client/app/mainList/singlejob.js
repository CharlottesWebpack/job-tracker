angular.module('jobTracker.singlejob', [])
.controller('singlejob', function($scope, uploadfileservice){
  $scope.addFile = function() {
    var file = $scope.myfile
    console.log(file)
    var uploadUrl  = '/upload';
    uploadfileservice.upload(uploadUrl, file);
  };
});