angular.module('jobTracker.removeModal', [])
.controller('removeModalController', function($uibModalInstance, JobFactory, job, getJobs) {
  var $remove = this;
  $remove.ok = function(){
    JobFactory.deleteJob(job)
    .then((res) => {
      getJobs();
      $uibModalInstance.close();
    });
  };
  $remove.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

