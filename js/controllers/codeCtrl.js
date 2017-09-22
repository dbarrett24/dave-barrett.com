angular.module('app').controller('codeCtrl', function ($scope, $window, mainService) {


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
    
    
    //ARRAY PROTOTYPE
    Array.prototype.diff = function(arr2){
        var ret = [];
        for(var i = 0; i < this.length; i++){
            for(var j = 0; j < arr2.length; j++){
                if(this[i].skill_name === arr2[j]){
                    ret.push(this[i]);
                }
            }
        }
        return ret;
    }


    //PROJECTS
    $scope.findProjectInfo = function (projectName) {
        var selectedProj = $scope.projects.filter(function (project) {
            return project.project_name === projectName;
        })

        $scope.selectedProject = selectedProj.pop()
        // console.log($scope.selectedProject);

        $scope.selectedProjSkills = $scope.skills.diff($scope.selectedProject.tech_used);
        // console.log($scope.selectedProjSkills);
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


    
$window.onload = function(){
    $('#frame').fadeOut('slow');
    $('#loader-overlay').fadeOut(2700);
}
    $(function(){
    

    
   
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
            cellSelector: '.carousel-cell',
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