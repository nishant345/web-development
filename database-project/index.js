/*importing required modules*/
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var webCrawler = require('./web_crawler/webCrawler');
var pdfExtraction = require('./pdf_extraction/pdfExtraction');
var server = require('./server/api/index');

/* server initialization*/
app.listen(4001);
console.log('Listening on port 4001');
console.log('Server Running......');
app.use(express.static(__dirname+'/presentation'));

/*mongodb connection*/
mongoose.connect('mongodb://admin:admin1@ds135653.mlab.com:35653/db_project',function(){
  console.log("Connected to mongodb server");
});
var conn = mongoose.connection;

/*routes for server*/
app.use('/', server);

/*parse web pages (HTML)*/
webCrawler.parseRestaurantOneData();
webCrawler.parseRestaurantTwoData();

/*parse pdf file*/
pdfExtraction.extractRestaurantThreeData();
