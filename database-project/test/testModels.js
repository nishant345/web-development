var mocha = require ("mocha");
var assert = require ("assert");
var restaurantOne = require ("../model/restaurantOne");


//Describe tests
describe('records saving time', function(){
	//create tests
	it('should take less than 5000ms', function(done){
	  this.timeout(5000);
	  setTimeout(done, 3000);
	});
})