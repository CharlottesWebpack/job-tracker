angular.module('jobTracker.removeModal', [])
.controller('removeModalController', function($uibModalInstance, JobFactory, job, jobList, getJobs) {
  var $remove = this;
  $remove.ok = function(){
    JobFactory.deleteJob(job)
    .then((res) => {
      jobList = res;
      $uibModalInstance.close();
      getJobs();
    });
  }
  $remove.cancel = function () {
    console.log("called")
    $uibModalInstance.dismiss('cancel');
  };
});

