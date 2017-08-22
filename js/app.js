angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('code', {
                url: '/',
                templateUrl: '../views/code.html',
                controller: 'codeCtrl'
            })

            $urlRouterProvider.otherwise('/');
    });

