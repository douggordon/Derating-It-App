angular.module('starter').controller('GaugeCtrl', function($scope, $http, $ionicModal) {
  $http.get('js/data.json').success(function(JSON) {
    
    $scope.myGauge = null;
    $scope.data = JSON.data;
    /*console.log('load cable data ' + $scope.data);*/

    $scope.uniqueGauge = [];
      for(i = 0; i< $scope.data.length; i++){    
          if($scope.uniqueGauge.indexOf($scope.data[i].Gauge) === -1){
              $scope.uniqueGauge.push($scope.data[i].Gauge);

          }
             
      }

        // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('modal/GaugeModal.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    }); 

  
  $scope.categSelectionChanged = function(value) {
    console.log("Got it--" + value);
    $scope.myGauge=value;
    /*$scope.radioEvents.push($scope.user.selectedEmail);*/
  };


  })
})