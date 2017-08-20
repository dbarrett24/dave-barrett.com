angular.module('app').controller('mainCtrl', function($scope, mainService){
    // *****************************
        $scope.test = mainService.test;
    // *****************************

    
        $(document).ready(function(){

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

            $('.project-card').hover(
                function(){$(this).addClass("hover");},
                function(){$(this).removeClass("hover");
            });




        })

});