angular.module('app').directive('navDir', function(){
    return{
        restrict: 'AE',
        templateUrl: '../../views/directives/navDir.html',
        link: function(scope, elem, attrs){


            //Smooth Scrolling
            var scrollLink = $('.nav-links, .scroll-js');
            // var scrollLink = $('.nav-links');
            scrollLink.click(function(event){
                event.preventDefault();
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top - 100
                }, 500)

            })
         

            $(window).scroll(function(){
                var scrollPos = $(this).scrollTop();
                // console.log(scrollPos);
                if(scrollPos > 100){
                    $(":root").css("--scrollbar-track-color", "linear-gradient(180deg, #fc466b, #3f5efb)");
                    // $('#scrollbar-overlay').css('opacity', '0');
                } else{
                    $(":root").css("--scrollbar-track-color", "transparent");
                    // $('#scrollbar-overlay').css('opacity', '1');

                }

                if(scrollPos > ($(window).innerHeight() - 100) ){ //877 was old value (not as good on mobile)
                    // $('.nav').removeClass('is-absolute');
                    $('.nav').addClass('is-fixed');
                }
                else{
                    $('.nav').removeClass('is-fixed');
                    // $('.nav').addClass('is-absolute');
                }

                scrollLink.each(function(){
                    var sectionOffset = $(this.hash).offset().top - 250;
                    // console.log( $(this.hash).offset().top)
                    if(sectionOffset <= scrollPos){
                        if($(this).hasClass('scroll-js')){
                            $(this).css('background', 'transparent');
                            
                        } else{
                            $(this).addClass('is-active');
                            $(this).siblings().removeClass('is-active');

                        }
                        
                    }

                })
            })
            

        }
    }
});