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


            //Sticky Nav
            var targetPos = $('.nav').offset().top;
            // console.log(targetPos);

            $(window).resize(function(){
                targetPos = $('.nav').offset().top;
            });

            $(window).scroll(function(){
                var scrollPos = $(this).scrollTop();
                // console.log(scrollPos);

                if(scrollPos > 879){
                    // $('.nav').removeClass('is-absolute');
                    $('.nav').addClass('is-fixed');
                }
                else{
                    $('.nav').removeClass('is-fixed');
                    // $('.nav').addClass('is-absolute');
                }

                scrollLink.each(function(){
                    var sectionOffset = $(this.hash).offset().top - 250;

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