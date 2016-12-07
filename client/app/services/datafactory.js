angular.module('jobTracker.', [])

.factory('dataFactory.dataservice', function(data) {
  var factory = {};
  factory.data = [];
    function init() {
       $scope.totalPages = Math.ceil(dataFactory.data.length/$scope.pageSize);
       $scope.pagedData = dataFactory.data;
    }

    init();
  
  return factory;
});