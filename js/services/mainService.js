angular.module('app').service('mainService', function($http){
    // *****************************
        this.test = "Controller & Service are working";
    // *****************************
        this.getSkills = function () {
            return $http({
                method: 'GET',
                url: "../json/skills.json",
            }).then(function (response) {
                // console.log(response.data)
                return response.data
            })
        }
        this.getExperience = function () {
            return $http({
                method: 'GET',
                url: "../json/experience.json",
            }).then(function (response) {
                // console.log(response.data)
                return response.data
            })
        }
        this.getQuotes = function () {
            return $http({
                method: 'GET',
                url: "../json/quotes.json",
            }).then(function (response) {
                // console.log(response.data)
                return response.data
            })
        }
        this.getProjects = function () {
            return $http({
                method: 'GET',
                url: "../json/projects.json",
            }).then(function (response) {
                // console.log(response.data)
                return response.data
            })
        }
});