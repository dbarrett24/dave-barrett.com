angular.module('app').directive('projectModalDir', function(){
    return{
        restrict: 'AE',
        templateUrl: './views/directives/projectModal.html',
        link: function(scope, elem, attrs){
                //TRIGGER OVERLAY
            $('.trigger-overlay').on('click', function(){
                $('.overlay').addClass('open');
                $('.project-modal').addClass('open');
                $('.blur-bg').addClass('open');
                $(".overlay-huge").hasClass("open", function () {
                    $("body").addClass("no-scroll");
                });
            })
            $('.overlay').on('click', function(){
                $(this).removeClass('open');
                $('.project-modal').removeClass('open');
                $('.blur-bg').removeClass('open');
            })

            // $('.project-media-carousel').flickity({
            //     // options
            //     cellAlign: 'left',
            //     pageDots: true,
            //     // groupCells: 3,
            //     adaptiveHeight: true,
            //     imagesLoaded: true,
            //     autoPlay: true,
            //     contain: true
            // });

            
            
        },
        controller: function($scope){
            
            $scope.flickityOptions={
                cellSelector: '.carousel-media-cell',
                cellAlign: 'left',
                pageDots: true,
                // groupCells: 3,
                adaptiveHeight: true,
                imagesLoaded: true,
                autoPlay: true,
                contain: true
            }

        }
    }
})