angular.module('app').controller('mainCtrl', function($scope, $window, mainService){
    // *****************************
        $scope.test = mainService.test;
    // *****************************
    // $window.onload = function(){
    //     $('#frame').fadeOut('slow');
    //     $('#loader-overlay').fadeOut(2700);
    // }
    // $window.onload();

});