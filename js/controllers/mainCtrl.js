angular.module('app').controller('mainCtrl', ['$scope', '$window', '$timeout','mainService', function($scope, $window, $timeout, mainService){
    // *****************************
        $scope.test = mainService.test;
        // *****************************
    $scope.windowLoaded = false;
    console.log('loading completed: ' + $scope.windowLoaded);

  
    $window.onload = function(){
        $timeout(function(){
            $scope.windowLoaded = true;
            console.log('loading completed: ' + $scope.windowLoaded);

        }, 500);
    }
}]);