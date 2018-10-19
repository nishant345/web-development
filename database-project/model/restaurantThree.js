/*importing required modules*/
var mongoose = require('mongoose');

/*Restaurant Three Database Schema*/
restaurantThreeSchema = mongoose.Schema({
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
	items :{
		itemId: {
			type: String
		},
		itemName: {
			type: String
		},
		itemDescription: {
			type: String
		},
		itemEnglishDesc: {
			type: String
		},
		itemRate: {
			type: String
		}
	}
})
var restaurantThree = module.exports = mongoose.model('restaurantthrees', restaurantThreeSchema); //exporting Schema

/*Get Restaurant Three Data*/
module.exports.getRestaurantThreeData = function(callback){
	restaurantThree.find(callback); //mongoose API to get all the data of restaurant three from mongoDB
}

/*Put Restaurant Three Data*/
module.exports.putRestaurantThreeData = function(restaurantThreeData, callback){
	restaurantThree.create(restaurantThreeData, callback); //mongoose API to add the data of restaurant three to mongoDB
}

/*Clear Restaurant Three Data*/
module.exports.clearRestaurantThreeData = function({}, callback){
	restaurantThree.remove(callback); //mongoose API to remove all the data of restaurant three from mongoDB
}
