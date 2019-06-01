angular.module('app').directive('resumeModalDir', function(){
    return {
        restrict: 'AE',
        templateUrl: './views/directives/resumeModal.html',
        link: function(scope, elem, attrs){
                //TRIGGER OVERLAY
            $('.trigger-resume').on('click', function(){
                $('body').addClass('open');
                $('.overlay-warm').addClass('open');
                $('.resume-modal').addClass('open');

                //Unused because of Filter(Blur) css performance issues
                // $('.main-wrapper').addClass('is-blurred');
                // $('.project-modal').addClass('is-blurred');
                $(".overlay-warm").hasClass("open", function () {
                    $("body").addClass("no-scroll");
                });
            })
            $('.overlay-warm').on('click', function(){
                $(this).removeClass('open');
                $('body').removeClass('open');
                
                //Unused because of Filter(Blur) css performance issues
                // $('.main-wrapper').removeClass('is-blurred');
                // $('.project-modal').removeClass('is-blurred');
                $('.resume-modal').removeClass('open');
            })
        }
    }
})