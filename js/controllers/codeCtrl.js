angular.module('app').controller('codeCtrl', function ($scope, mainService) {


    $scope.getSkills = function(){
        mainService.getSkills().then(function (skills) {
            $scope.skills = skills;
            $scope.learning = skills;
            console.log("skills", skills);
    
            $scope.skillMap = skills.map(function(skill){
                return skill;
            })
        });
    }
    $scope.getSkills();

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



    //FILTER SKILLS
    
    $scope.skillFilter = function(category){
        $scope.skills = $scope.skills.filter(function(skill){
            return skill.skill_category === category;
        })
    }
    $scope.filterSkills = function(category){
        
        $scope.skills = $scope.skillMap.map(function(skill){
            return skill;
        })
        $scope.skillFilter(category);
    }
    

    //PROJECTS
    $scope.findProjectInfo = function(projectName){
        $scope.projects.filter(function(project){
            if(project.project_name === projectName){
                $scope.selectedProject = project;
                console.log($scope.selectedProject.files[0]);
            }
        })

        // if(projectName === 'Basketbrawwl'){
        //     $scope.selectedProject = $scope.projects[0];
        // }
    }










//////////////////////////////////////////////////////////////////////////////
//JQUERY THINGS
//////////////////////////////////////////////////////////////////////////////

//SCROLL REVEAL
    window.sr = ScrollReveal({
        origin: 'bottom',
        duration: 500,
        delay: 250,
        easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        scale: 0.9
    },50);
    sr.reveal('.section-text');
    sr.reveal('.section-content');
    sr.reveal('.projects-carousel');
//END/////////////////



    $(document).ready(function () {
        // //TRIGGER OVERLAY
        // $('.trigger-overlay').on('click', function(){
        //     $('.overlay').addClass('open');
        //     $('.project-modal').addClass('open');
        //     $('.blur-bg').addClass('open');
        //     $(".overlay-huge").hasClass("open", function () {
        //         $("body").addClass("no-scroll");
        //     });
        // })
        // $('.overlay').on('click', function(){
        //     $(this).removeClass('open');
        //     $('.project-modal').removeClass('open');
        //     $('.blur-bg').removeClass('open');
        // })
        


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
            autoPlay: true,
            contain: true
        });

   
       

        $('.project-card').hover(
            function () {
                $(this).addClass("hover");
            },
            function () {
                $(this).removeClass("hover");
            });


        //Filtering
        $('.btn-filter-teal').on('click', function(){
            $(this).addClass('is-filtered');
            $(this).removeClass('btn-filter-teal');
            $(this).siblings().removeClass('is-filtered');
            $(this).siblings().addClass('btn-filter-teal');
            
        })

    })

});