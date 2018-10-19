/*importing required modules*/
var mongoose = require('mongoose');

/*Restaurant Two Database Schema*/
restaurantTwoSchema = mongoose.Schema({
	heading: {
		type: String
	},
	restaurantNumber: {
		type: String
	},
	restaurantName: {
		type: String
	},
	restaurantUrl: {
		type: String
	},
	contact: {
		address: {
			addressLineOne:{
				type: String
			},
			addressLineTwo:{
				type: String
			},
			telephoneNumber:{
				type: String
			},
			openingDays:{
				type: String
			},
			openingTime:{
				type: String
			}
		}
	},
	items: {
		itemId: {
			type: String
		},
		itemName: {
			type: String
		},
		itemDescription: {
			type: String
		},
		itemRate: {
			type: String
		}
	}
})
var restaurantTwo = module.exports = mongoose.model('restauranttwos', restaurantTwoSchema); //exporting Schema

/*Get Restaurant Two Data*/
module.exports.getRestaurantTwoData = function(callback){
	restaurantTwo.find(callback); //mongoose API to get all the data of restaurant two from mongoDB 
}

/*Put Restaurant Two Data*/
module.exports.putRestaurantTwoData = function(restaurantTwoData, callback){
	restaurantTwo.create(restaurantTwoData, callback); //mongoose API to add the data of restaurant two to mongoDB
}

/*Clear Restaurant Two Data*/
module.exports.clearRestaurantTwoData = function({}, callback){
	restaurantTwo.remove(callback); //mongoose API to remove all the data of restaurant two from mongoDB
}

