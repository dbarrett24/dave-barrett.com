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


    $(document).ready(function () {

        //Intro Header Scroll Fade Effect
        var scrollPos = $(this).scrollTop();
        console.log(scrollPos);

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

angular.module('app').service('mainService', function ($http) {
    // *****************************
    this.test = "Controller & Service are working";
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
            console.log(targetPos);

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
