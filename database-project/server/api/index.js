/*importing required modules*/
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../../model/db');
var restaurantOneModel = require('../../model/restaurantOne');
var restaurantTwoModel = require('../../model/restaurantTwo');
var restaurantThreeModel = require('../../model/restaurantThree');
var webCrawler = require('../../web_crawler/webCrawler');
var pdfExtraction = require('../../pdf_extraction/pdfExtraction');

/*Server API for getting whole database*/
router.get('/wholeDatabase', function(req, res){
	Promise.all([
	  	restaurantOneModel.find(),
		restaurantTwoModel.find(),
		restaurantThreeModel.find(),
	])
	.then(results => {
		res.json(results);
	})
	.catch(err => {
	  	console.error("Something went wrong",err);
	})
});

/*Server API for getting restaurant one data*/
router.get('/getRestaurantOneData', function(req, res){
	restaurantOneModel.getRestaurantOneData(function(err, data){
		if(err){
			console.log("in ERROR block");
			throw err;
		}
		res.json(data);
	});
});
/*Server API for getting restaurant two data*/
router.get('/getRestaurantTwoData', function(req, res){
	restaurantTwoModel.getRestaurantTwoData(function(err, data){
		if(err){
			console.log("in ERROR block");
			throw err;
		}
		res.json(data);
	});
});
/*Server API for getting restaurant three data*/
router.get('/getRestaurantThreeData', function(req, res){
	restaurantThreeModel.getRestaurantThreeData(function(err, data){
		if(err){
			console.log("in ERROR block");
			throw err;
		}
		res.json(data);
	});
});
/*Server API for reloading database*/
router.get('/reloadDatabase', function(req, res){
	console.log("reload data")
	/*parse web pages (HTML)*/
	webCrawler.parseRestaurantOneData();
	webCrawler.parseRestaurantTwoData();

	/*parse pdf file*/
	pdfExtraction.extractRestaurantThreeData();
	Promise.all([
	  	restaurantOneModel.find(),
		restaurantTwoModel.find(),
		restaurantThreeModel.find(),
	])
	.then(results => {
		res.json(results);
	})
});

module.exports = router;