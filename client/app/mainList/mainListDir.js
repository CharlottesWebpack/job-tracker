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
.directive('showNewsDir', function(){
  return {
      transclude: true,
      restrict: 'E',
      templateUrl: 'app/mainList/getNews.html'
  }
});