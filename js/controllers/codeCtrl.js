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
    
    mainService.getExperience().then(function (jobs) {
        $scope.jobs = jobs;
        console.log("experience", jobs);
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
    
    //FILTER EXPERIENCE (In Progress)
    $scope.jobFilter = function(tag){
        $scope.jobs = $scope.jobs.filter(function(job){
            return job.job_tags.includes(tag);
        })
    }
    $scope.filterJobs = function(tag){
        
        $scope.jobs = $scope.jobMap.map(function(job){
            return job;
        })
        $scope.jobFilter(tag);
    }

    //FILTER TESTIMONIALS (In Progress)

    // $scope.skillFilter = function(category){
    //     $scope.skills = $scope.skills.filter(function(skill){
    //         return skill.skill_category === category;
    //     })
    // }
    // $scope.filterSkills = function(category){
        
    //     $scope.skills = $scope.skillMap.map(function(skill){
    //         return skill;
    //     })
    //     $scope.skillFilter(category);
    // }

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

    $scope.stopVideo = function(){
        $scope.selectedProject = null;
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
            // autoPlay: true,
            contain: true
        });

       
        //Quotes CAROUSEL
        $('.quotes-carousel').flickity({
            // options
            cellSelector: '.quote-carousel-cell',
            cellAlign: 'left',
            pageDots: false,
            // groupCells: 3,
            adaptiveHeight: true,
            imagesLoaded: true,
            // autoPlay: true,
            autoPlay: 4000,
            contain: true,
            wrapAround: true
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