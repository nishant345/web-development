/*importing required modules*/
var mongoose = require('mongoose');

/*Restaurant One Database Schema*/
restaurantOneSchema = mongoose.Schema({
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
		rateMini: {
			type: String
		},
		rateMax: {
			type: String
		}
	}
})
var restaurantOne = module.exports = mongoose.model('restaurantones', restaurantOneSchema); //exporting Schema

/*Get Restaurant One Data*/
module.exports.getRestaurantOneData = function(callback){
	restaurantOne.find(callback); //mongoose API to get all the data of restaurant one from mongoDB
}

/*Put Restaurant One Data*/
module.exports.putRestaurantOneData = function(restaurantOneData, callback){
	restaurantOne.create(restaurantOneData, callback); //mongoose API to add the data of restaurant one to mongoDB
}

/*Clear Restaurant one Data*/
module.exports.clearRestaurantOneData = function({}, callback){
	restaurantOne.remove(callback); //mongoose API to remove all the data of restaurant one from mongoDB
}
