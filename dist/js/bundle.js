'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../views/home.html'
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    // *****************************
    $scope.test = mainService.test;
    // *****************************
});
'use strict';

angular.module('app').service('mainService', function ($http) {
    // *****************************
    this.test = "Controller & Service are working";
    // *****************************
});
'use strict';

angular.module('app').directive('navDir', function () {
    return {
        restrict: 'AE',
        templateUrl: './views/directives/navDir.html'
    };
});
//# sourceMappingURL=bundle.js.map
