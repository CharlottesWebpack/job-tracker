angular.module('jobTracker.directives', [])
.directive('singleJobDir', function(){
  return {
    transclude: true,
    restrict: 'E',
    templateUrl: 'app/mainList/singleJob.html'
  }
})
.directive('addJobDir', function(){
    return {
      transclude: true,
      restrict: 'E',
      templateUrl: 'app/mainList/addJob.html'
    }
})
 .directive('fileModel', function($parse) {
  return {
    restrict: 'A',
    link: function(scope,element,attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function() {
        scope.$apply(function() {
          modelSetter(scope, element[0].files[0]);
        })
      })
    }
  }
});
