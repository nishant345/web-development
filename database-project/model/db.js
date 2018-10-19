var mongoose = require('mongoose');
var restaurantOneModel = require('./restaurantOne');
var restaurantTwoModel = require('./restaurantTwo');
var restaurantTwoModel = require('./restaurantThree');

module.exports.getWholeDb = function(callback) {
	console.log('in whole db');
	Promise.all([
	  	restaurantOneModel.find(),
	  	restaurantTwoModel.find(),
	  	restaurantThreeModel.find()
	])
	.then(results => {
		console.log("results");
	})
	.catch(err => {
	  	console.error("Something went wrong",err);
	})
}
