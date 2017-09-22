angular.module('app').directive('projectModalDir', function(){
    return{
        restrict: 'AE',
        templateUrl: './views/directives/projectModal.html',
        link: function(scope, elem, attrs){
                //TRIGGER OVERLAY
            $('.trigger-overlay').on('click', function(){
                $('body').addClass('open');
                $('.overlay').addClass('open');
                $('.project-modal').addClass('open');
                $('.mobile-project-modal').addClass('open');
                $('.blur-bg').addClass('open');
                $(".overlay-huge").hasClass("open", function () {
                    $("body").addClass("no-scroll");
                });
            })
            $('.overlay').on('click', function(){
                $(this).removeClass('open');
                $('body').removeClass('open');
                $('.project-modal').removeClass('open');
                $('.mobile-project-modal').removeClass('open');
                $('.blur-bg').removeClass('open');
            })
            $('.btn-corner-cancel').on('click', function(){
                $('.overlay').removeClass('open');
                $('body').removeClass('open');
                $('.project-modal').removeClass('open');
                $('.mobile-project-modal').removeClass('open');
                $('.blur-bg').removeClass('open');
            })

            $('.project-media-carousel').flickity({
                // options
                cellSelector: '.carousel-media-cell',
                cellAlign: 'left',
                pageDots: false,
                // groupCells: 3,
                imagesLoaded: true,
                autoPlay: 4000,
                // contain: true,
                wrapAround: true,
                adaptiveHeight: false
            });
            
            
        },
   
    }
})