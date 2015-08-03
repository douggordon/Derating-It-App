angular.module('starter').controller('LengthCtrl', function($scope, $ionicModal) {
  $scope.message = 'hello';

    var number = [];

  $scope.values = [];

  $scope.viewSpace = 0;

 $scope.isDisabled = false;

//functions for number keys
  $scope.set = function(digit){
    number.push(digit);
    //console.log(digit);
      
    $scope.viewSpace = number.join('');
    //only allow one decimal point in viewSpace
    if(($scope.viewSpace + '').indexOf('.')=== -1){
      $scope.isDisabled = false;
   }else{
  $scope.isDisabled = true;
    }
  }

//enter function
  $scope.execute = function(viewSpace){
    $scope.values.push(viewSpace * 1);
    console.log(viewSpace);
    number.length = 0;
    $scope.isDisabled = false;
    $scope.modal.hide();
  }

//clear function
  $scope.clear = function(){
    number.length = 0;
    $scope.values.length = 0;
    $scope.viewSpace = 0;
    $scope.isDisabled = false;

  }


        // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('modal/LengthModal.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    }); 



})