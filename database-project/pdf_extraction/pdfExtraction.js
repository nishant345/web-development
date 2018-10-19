var pdfText = require('pdf-text')
var restaurantThreeModel = require('../model/restaurantThree');

/*Parsing data from pdf:'http:localhost:4001/maharadscha-palast.pdf'*/
module.exports.extractRestaurantThreeData = function(){
	pdfText("maharadscha-palast.pdf", function(err, chunks) {
		restaurantThreeModel.clearRestaurantThreeData({}, function(err){
			if(err){
				console.log("in parseRestaurantThreeData block");
				throw err;
			}else {
				console.log("data removed from restaurant three db.");
			}
		});
		var menuList =  chunks;
	  	var items = [];
	  	var data = {}, i;
	  	data.restaurantNumber= 'Restaurant Three';
		data.restaurantName = 'maharadschapalast.de';
		data.restaurantUrl = 'https://maharadschapalast.de/'
		data.contact = {};
		data.contact.address = {
			addressLineOne: 'Zschopauer Straße 48, 09111',
			addressLineTwo: 'Chemnitz',
			telephoneNumber: '(0371) 6 90 82-0 (-2) ',
			openingDays: 'Monday - Friday:',
			openingTime: '16.30-23.30'
		}
		data.items = {};
	  	for (i=0; i<100; i++){
	  		var item = menuList.slice(menuList.indexOf(parseInt(i+1).toString()), menuList.indexOf(parseInt(i+2).toString()));
	  		items.push(item);
	  	}
	  	for (i=0; i<items.length; i++){
			data.items.itemId = items[i][0];
			data.items.itemName = items[i][1];
			data.items.itemRate = items[i][3];
			data.items.itemDescription = items[i][5];
			data.items.itemEnglishDesc = items[i][6];
			restaurantThreeModel.putRestaurantThreeData(data, function(err){
				if(err){
					console.log("in putRestaurantThreeData block");
					throw err;
				}
			});
	  	}
	})
}
