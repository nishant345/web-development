/*importing required modules*/
var request = require('request');
var cheerio = require('cheerio');
var restaurantOneModel = require('../model/restaurantOne');
var restaurantTwoModel = require('../model/restaurantTwo');

/*Parsing data from webpage:'http://www.stehpizzeria-napoli.de/index.php/home.html'*/
module.exports.parseRestaurantOneData = function(){
	var url = 'http://www.stehpizzeria-napoli.de/index.php/home.html'
	request(url, function (err, response, html) {
		if(!err){
			restaurantOneModel.clearRestaurantOneData({}, function(err){
				if(err){
					console.log("in parseRestaurantOneData block");
					throw err;
				}else {
					console.log("data removed from restaurant one db.");
				}
			});
			var data = {};
			data.heading = 'Pizza';
			data.restaurantNumber= 'Restaurant One';
			data.restaurantName = 'stehpizzeria-napoli.de';
			data.restaurantUrl = 'http://www.stehpizzeria-napoli.de/index.php/home.html'
			data.contact = {};
			data.contact.address = {
				addressLineOne: 'Reineckerstr. 40, 09126',
				addressLineTwo: 'Chemnitz',
				telephoneNumber: '(0371) 570 21 11',
				openingDays: 'Mon-Fri',
				openingTime: '5:30 pm - 10:00pm'
			}
			data.items = {};
			var $ = cheerio.load(html);
			var menuList = $('.item-page').find('tbody').children();
			menuList.each(function(index){
				var itemList = $('.item-page').find('tbody').children().eq(index).children();
				data.items.itemId = $('.item-page').find('tbody').children().eq(index).children().eq(0).text().trim();
				var itemHtml = $('.item-page').find('tbody').children().eq(index).children().eq(1).text().trim();
				data.items.itemName = itemHtml.substr(0, itemHtml.indexOf('('));
				data.items.itemDescription = itemHtml.substr(itemHtml.indexOf('('), itemHtml.indexOf(')'));
				data.items.rateMini = $('.item-page').find('tbody').children().eq(index).children().eq(2).text().trim().substring(0,4);
				data.items.rateMax = $('.item-page').find('tbody').children().eq(index).children().eq(3).text().trim().substring(0,4);
				restaurantOneModel.putRestaurantOneData(data, function(err){
					if(err){
						console.log("in putRestaurantOneData block");
						throw err;
					}
				});
			});
		}
	});
}
/*Parsing data from webpage:'https://bombay-palast.de/karte.html'*/
module.exports.parseRestaurantTwoData = function(){
	var url = 'https://bombay-palast.de/karte.html';
	request(url, function (err, response, html) {
		if(!err){
			restaurantTwoModel.clearRestaurantTwoData({}, function(err){
				if(err){
					console.log("in parseRestaurantTwoData block");
					throw err;
				}else {
					console.log("data removed from restaurant two db.");
				}
			});
			var data = {};
			data.restaurantNumber= 'Restaurant Two';
			data.restaurantName = 'bombay-palast.de';
			data.restaurantUrl = 'https://bombay-palast.de/karte.html'
			data.contact = {};
			data.contact.address = {
				addressLineOne: 'Road of Nations 41b, 09111',
				addressLineTwo: 'Chemnitz',
				telephoneNumber: '(0371) 459 061 10',
				openingDays: 'Daily',
				openingTime: '11:30 - 14:30 & 17:30 - 23:30'
			}
			var $ = cheerio.load(html);
			var menuList = $('.mod_article').find('.ce_accordionStart');
			menuList.each(function(index) {
				data.heading = $('.mod_article').find('.ce_accordionStart').eq(index).children().eq(0).text().trim();
				items = $('.mod_article').find('.ce_accordionStart').eq(index).children().eq(1).find('.TableCard').find('tbody').children();
				data.items = {};
				items.each(function(indexRow){
					data.items.itemId =  $('.mod_article').find('.ce_accordionStart').eq(index).children().eq(1).find('.TableCard').find('tbody').children().eq(indexRow).children().eq(0).text().trim();
					var itemHtml = $('.mod_article').find('.ce_accordionStart').eq(index).children().eq(1).find('.TableCard').find('tbody').children().eq(indexRow).children().eq(1).html();
					data.items.itemName = itemHtml.substr(0, itemHtml.indexOf('<'));
					data.items.itemDescription = $('.mod_article').find('.ce_accordionStart').eq(index).children().eq(1).find('.TableCard').find('tbody').children().eq(indexRow).children().eq(1).find('span').text().trim();
					data.items.itemRate = $('.mod_article').find('.ce_accordionStart').eq(index).children().eq(1).find('.TableCard').find('tbody').children().eq(indexRow).children().eq(2).text().trim().substring(0,5);	
					//console.log(data);
					restaurantTwoModel.putRestaurantTwoData(data, function(err){
						if(err){
							console.log("in putRestaurantTwoData block");
							throw err;
						}
					});
				});
			});	 
		}
	});
}