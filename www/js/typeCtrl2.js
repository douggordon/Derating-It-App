angular.module('starter').controller('TypeCtrl2',['$scope', '$http', '$rootScope', '$location',
    function($scope, $http, $rootScope, $location) {
   
  $scope.typeList = [{ "text" : 'Cable Type *beta', "checked" : true , "id" : 'Patch'}];

    $scope.addRider = function(name, id, active) {
        $scope.typeList.push( { "text" : name, "checked" : active , "id" : id});
        
    };

    $scope.updateRider = function(item) {
      if(item.checked){
        console.log("Patch");
        item.id="Patch";
      }else{
        console.log("Horizontal");
        item.id="Horizontal";
      }
      console.log(item.id, item.checked)
       
    }
}]);