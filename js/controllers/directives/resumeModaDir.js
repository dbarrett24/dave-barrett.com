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
                $('.blur-bg').addClass('open');
                $(".overlay-warm").hasClass("open", function () {
                    $("body").addClass("no-scroll");
                });
            })
            $('.overlay-warm').on('click', function(){
                $(this).removeClass('open');
                $('body').removeClass('open');
                $('.resume-modal').removeClass('open');
                $('.blur-bg').removeClass('open');
            })
        }
    }
})