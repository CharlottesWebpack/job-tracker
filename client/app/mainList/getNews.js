angular.module('jobTracker.getNews', [])
.controller('getNewsController', function($uibModalInstance, news) {
  var $ctrl = this;
  $ctrl.news = news;
  console.log(news)
})