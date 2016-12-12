angular.module('jobTracker.removeModal', [])
.controller('removeModalController', function($uibModalInstance, JobFactory, DemoFactory, job, getJobs, demo) {
  var $remove = this;
  var demo = demo;
  $remove.ok = function(){
    if (demo){
      var filtered = DemoFactory.jane.jobList
      .filter((item) => {return item.id !== job.id;})
      getJobs(filtered);
      $uibModalInstance.close();
      return;
    }
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

