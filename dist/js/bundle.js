'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('code', {
        url: '/',
        templateUrl: '../views/code.html',
        controller: 'codeCtrl'
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').service('mainService', function ($http) {
    // *****************************
    this.test = "Controller & Service are working";
    // *****************************
    this.getSkills = function () {
        return $http({
            method: 'GET',
            url: "../JSON/skills.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
    this.getExperience = function () {
        return $http({
            method: 'GET',
            url: "../JSON/experience.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
    this.getQuotes = function () {
        return $http({
            method: 'GET',
            url: "../JSON/quotes.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
    this.getProjects = function () {
        return $http({
            method: 'GET',
            url: "../JSON/projects.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
});
'use strict';

angular.module('app').controller('codeCtrl', function ($scope, mainService) {

    mainService.getSkills().then(function (skills) {
        $scope.skills = skills;
        console.log("skills", skills);
    });

    mainService.getExperience().then(function (experience) {
        $scope.experience = experience;
        console.log("experience", experience);
    });

    mainService.getQuotes().then(function (quotes) {
        $scope.quotes = quotes;
        console.log("quotes", quotes);
    });

    mainService.getProjects().then(function (projects) {
        $scope.projects = projects;
        console.log("projects", projects);
    });

    $(document).ready(function () {

        //Intro Header Scroll Fade Effect
        var scrollPos = $(this).scrollTop();
        // console.log(scrollPos);

        var fadeStart = 100 // 100px scroll or less will equiv to 1 opacity

        ,
            fadeUntil = 499 // 200px scroll or more will equiv to 0 opacity

        ,
            fading = $('#intro-header');

        $(window).bind('scroll', function () {
            var offset = $(document).scrollTop(),
                opacity = 0;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            fading.css('opacity', opacity);
        });

        //Projects CAROUSEL
        $('.projects-carousel').flickity({
            // options
            cellAlign: 'left',
            pageDots: true,
            // groupCells: 3,
            adaptiveHeight: false,
            imagesLoaded: true,
            autoPlay: false,
            contain: true
        });

        $('.project-card').hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });
    });
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    // *****************************
    $scope.test = mainService.test;
    // *****************************

});
'use strict';

angular.module('app').directive('navDir', function () {
    return {
        restrict: 'AE',
        templateUrl: './views/directives/navDir.html',
        link: function link(scope, elem, attrs) {

            //Smooth Scrolling
            var scrollLink = $('.nav-links, .scroll-js');
            // var scrollLink = $('.nav-links');
            scrollLink.click(function (event) {
                event.preventDefault();
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top - 100
                }, 500);
            });

            //Sticky Nav
            var targetPos = $('.nav').offset().top;
            // console.log(targetPos);

            $(window).resize(function () {
                targetPos = $('.nav').offset().top;
            });

            $(window).scroll(function () {
                var scrollPos = $(this).scrollTop();
                // console.log(scrollPos);

                if (scrollPos > 879) {
                    // $('.nav').removeClass('is-absolute');
                    $('.nav').addClass('is-fixed');
                } else {
                    $('.nav').removeClass('is-fixed');
                    // $('.nav').addClass('is-absolute');
                }

                scrollLink.each(function () {
                    var sectionOffset = $(this.hash).offset().top - 250;

                    if (sectionOffset <= scrollPos) {
                        if ($(this).hasClass('scroll-js')) {
                            $(this).css('background', 'transparent');
                        } else {
                            $(this).addClass('is-active');
                            $(this).siblings().removeClass('is-active');
                        }
                    }
                });
            });
        }
    };
});
//# sourceMappingURL=bundle.js.map
