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

        $('.project-card').hover(
            function () {
                $(this).addClass("hover");
            },
            function () {
                $(this).removeClass("hover");
            });




    })

});