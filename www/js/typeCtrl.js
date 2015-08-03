angular.module('starter').controller('TypeCtrl', function($scope, $http, $ionicModal) {
  $http.get('js/data.json').success(function(JSON) {
    
    $scope.myType = null;
    $scope.data = JSON.data;
    /*console.log('load cable data ' + $scope.data);*/

    $scope.uniqueType = [];
      for(i = 0; i< $scope.data.length; i++){    
          if($scope.uniqueType.indexOf($scope.data[i].Type) === -1){
              $scope.uniqueType.push($scope.data[i].Type);

          }
             
      }

        // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('modal/TypeModal.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    }); 

  
  $scope.categSelectionChanged = function(value) {
    console.log("Got it--" + value);
    $scope.myType=value;
    /*$scope.radioEvents.push($scope.user.selectedEmail);*/
  };


  })
})