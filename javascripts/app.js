var app = angular.module('app', ['ui.router']);






app.config(function($stateProvider,$urlRouterProvider){


	$urlRouterProvider.otherwise("/");


	$stateProvider
	  .state('resume',{
	  	url:"/",
	  	templateUrl:"index.html",
	  	controller: "homeCtrl"
	});
	  


});





app.controller("homeCtrl",function($scope,$http,$rootScope,$state){


	var username = 'vinay13' ;



	$http.get("https://api.github.com/users/" + username)
	.then(function(response) {
        $scope.users = response.data;
        console.log('user: ',$scope.users);
    });

	$http.get("https://api.github.com/users/vinay13/repos")
	.then(function(response) {
        $scope.records = response.data;
        console.log($scope.records);
    });

	});
