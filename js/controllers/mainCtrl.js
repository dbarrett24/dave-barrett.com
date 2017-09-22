angular.module('app').controller('mainCtrl', function($scope, $window, mainService){
    // *****************************
        $scope.test = mainService.test;
        // *****************************
    $scope.windowLoaded = false;
    console.log('loading completed: ' + $scope.windowLoaded);
    $window.onload = function(){
        $scope.windowLoaded = true;
        console.log('loading completed: ' + $scope.windowLoaded);
    }

});