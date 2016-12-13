angular.module('jobTracker.deleteAccountModal', [])
.controller('deleteAccountController', function($uibModalInstance, AuthFactory, $location, $uibModal) {
  var $delete = this;
  $delete.ok = function(){
    AuthFactory.deleteAccount()
    .then(() => {
      $uibModalInstance.close();
      $location.path('/');
    })
  };
  $delete.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

