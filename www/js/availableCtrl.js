angular.module('starter').controller('AvailableCtrl', function($scope, $http, $ionicModal) {
  $http.get('js/data.json').success(function(JSON) {
    
    $scope.myCategory = null;
    $scope.data = JSON.data;
    /*console.log('load cable data ' + $scope.data);*/

    $scope.uniqueCat = [];
      for(i = 0; i< $scope.data.length; i++){    
          if($scope.uniqueCat.indexOf($scope.data[i].Category) === -1){
              $scope.uniqueCat.push($scope.data[i].Category);

          }
             
      }

        // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('modal/CategoryModal.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    }); 

  
  $scope.categSelectionChanged = function(value) {
    console.log("Got it--" + value);
    $scope.myCategory=value;
    /*$scope.radioEvents.push($scope.user.selectedEmail);*/
  };


  })
})