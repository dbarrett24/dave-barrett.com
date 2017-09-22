angular.module('app', ['ui.router', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('code', {
                url: '/',
                templateUrl: '../../views/code.html',
                controller: 'codeCtrl'
            })

            $urlRouterProvider.otherwise('/');
});

//WHITELIST video source for Angular to use iframe source.
angular.module('app').filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

