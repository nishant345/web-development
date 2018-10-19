/*including route and animate modules of angular JS in  our app*/
var myFoodApp = angular.module('foodApp', ['ngRoute', 'ngAnimate']);

/*listed routes and respective controllers*/
myFoodApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/list', {
		templateUrl: 'views/list.html',
		controller: 'myFoodController'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html'
	})
	.when('/menu', {
		templateUrl: 'views/menu.html',
		controller: 'menuController'
	})
	.otherwise({
		rediectTo: '/home'
	})
}]);
/*controller for home page*/
myFoodApp.controller('myFoodController', ['$scope','$http', function($scope, $http){
	$http.get('/wholeDatabase').then(function(response){
		//getting whole database at front-end
		$scope.foodItems = response.data[0].concat(response.data[1]).concat(response.data[2]);
	});
	$scope.getFoodItem = function (foodItem){
		$scope.selectedFoodItem = foodItem;
		//opening modal dialog box for selected food item
		$(function() {
		    $("#dialog").dialog({
		    	resizable: false,
		      	height: "auto",
		      	width: 400,
		      	modal: false,
		    	buttons: {
			        Okay: function() {
			          $( this ).dialog( "close" );
			        },
			        Cancel: function() {
			          $( this ).dialog( "close" );
			        }
      			}
		    });
		});		
	}
	//function to disable the button after 24 hr after updation
	$scope.updateDatabase = function(){
		$http.get('/reloadDatabase');
		console.log("button disabled!!!");
	    $('button').attr("disabled", true);
	    setTimeout(function() { 
	    	$('button').removeAttr("disabled");
	    	console.log("button enabled") 
	    }, 120000);
	}
}]);
/*controller for menu page*/
myFoodApp.controller('menuController', ['$scope','$http', function($scope, $http){
	$http.get('/getRestaurantOneData').then(function(response){
		//getting restaurantr one data at front-end
		$scope.restaurantOneMenu = response.data;
	});
	$http.get('/getRestaurantTwoData').then(function(response){
		//getting wrestaurantr two data at front-end
		$scope.restaurantTwoMenu = response.data;
	});
	$http.get('/getRestaurantThreeData').then(function(response){
		//getting wrestaurantr three data at front-end
		$scope.restaurantThreeMenu = response.data;
	});
}]);

