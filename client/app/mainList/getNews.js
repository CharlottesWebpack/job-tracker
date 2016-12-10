angular.module('jobTracker.getNews', [])
.controller('getNewsController', function($uibModalInstance, news) {
  var $ctrl = this;
  $ctrl.news = news;
  $ctrl.searchQuery = $ctrl.news.stories.queries.request[0].searchTerms;
});