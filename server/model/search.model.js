var db = require('../database/db.js')
var _ = require('underscore')

var searchModel = module.exports;

searchModel.getAllDishNames = function() {
	return db('Dishes').where({
		voteCount:1
	}).select('dish_name')
	.then(function(rows) {
		return rows;
	})
}

searchModel.getTopRestaurant = function(params) {
	return db('Dishes')
		.innerJoin('Locations', 'Locations.id','Dishes.location_id')
		.innerJoin('Restaurants','Restaurants.id', 'Dishes.restaurant_id')
	.where({
		"Dishes.dish_name":params.dish_name,
		"Locations.location_name":params.location_name
	})
	.select('*').orderBy('voteCount', 'desc')
	.then(function(rows) {
		return rows[0]
	})
}

searchModel.getArrayOfRestaurantNames = function() {
	return db('Dishes').where({
		location_name: 'Santa Monica'
	}).select('resturant_id').from('Dishes').innerJoin('')
	.then(function(rows) {
		return rows;
	})
}
