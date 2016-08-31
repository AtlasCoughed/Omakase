var db = require('../database/db.js')
var _ = require('underscore')

var dishModel = module.exports;

// dishModel.findDish = function(params) {
// 	console.log('we are in dishModel inside findDish')
// 	console.log('+++****+++params inside dishModel inside findDish: ', params)
// 	return db('Dishes')
// 	.select(['restaurant_name','address','imageUrl','location_name'])
// 	.innerJoin('Locations','Restaurants')
// 	.innerJoin('Locations','Dishes.locations_id','Locations.id')
// 	// .innerJoin('Restaurants', 'Dishes.restaurant_id', 'Restaurants.id')
// 	.where({
// 		"restaurant_name": params.Restaurant.restaurant_name,
// 		"dish_name":params.Dish.dish_name,
// 		"location_name":params.Location.location_name
// 	})
// 	.orderBy('voteCount', 'desc')
// 	.limit(1)
// 	.then(function(rows) {
// 		console.log('we are in findDish inside dishModel and rows are : ',rows)
// 		return rows[0];
// 	});
// }

//This will check if a dish exists
dishModel.findSimple = function(params) {
	return db('Dishes')
		.innerJoin('Locations', 'Locations.id','Dishes.location_id')
		.innerJoin('Restaurants','Restaurants.id', 'Dishes.restaurant_id')
	.where({
		"Restaurants.restaurant_name": params.Restaurant.restaurant_name,
		"Dishes.dish_name":params.Dish.dish_name,
		"Locations.location_name":params.Location.location_name
	})
	.select('dish_name')
	.then(function(rows) {
		return rows[0]
	})
}



dishModel.incrementVoteCount = function(params) {
	console.log('we are inside incrementVoteCount')
	return db('Dishes')
	.innerJoin('Locations', 'Locations.id','Dishes.location_id')
	.innerJoin('Restaurants','Restaurants.id', 'Dishes.restaurant_id')
	.where({
		"Restaurants.restaurant_name": params.Restaurant.restaurant_name,
		"Dishes.dish_name":params.Dish.dish_name,
		"Locations.location_name":params.Location.location_name
	})
	.increment('voteCount', 1)
	.select('voteCount')
	.then(function(rows) {
		return rows[0]
	})
}


dishModel.addDishEntry = function(params) {
		return new Promise(function(resolve,reject) {
			return db('Restaurants').insert(params.Restaurant)
			.then(function(result) {
				params.Dish.restaurant_id = result[0]
				return params
			})
			.then(function(params) {
				console.log('params in second promise', params)
				return db('Locations').insert(params.Location)
				.then(function(result) {
					params.Dish.location_id = result[0]
					return params
				})
			})
			.then(function(params) {
				console.log('params in third promise', params)
				return db('Dishes').insert(params.Dish)
				.then(function(result) {
					return resolve(result)
				}) 
			})
		})
}

// dishModel.createDish = function(params,restId) {
// 	console.log('we are inside createDish inside dishModel')
// 	console.log('params inside createDish inside dishModel', params)
// 	return new Promise(function(resolve, reject) {
// 		return db('Dishes').insert(params.Dish)
// 		.then(function(result) {
// 			console.log('result inside createDish inside dishModel', result)
// 			return resolve(result)
// 		})
// 	})
// }

// dishModel.createRestaurant = function(params) {
// 	console.log('we are inside createRestaurant inside dishModel')
// 	console.log('params inside createRestaurant', params)
// 	return new Promise(function(resolve, reject) {
// 		return db('Restaurants').insert(params.Restaurant)
// 		.then(function(result) {
// 			console.log('result inside createRestaurant inside dishModel', result)
// 			params.rest_id = result[0]
// 			return resolve(params)
// 		})
// 	})
// }

// dishModel.createLocation = function(params) {
// 	console.log('we are inside createLocation inside dishModel')
// 	console.log('params inside createLocation ', params)
// 	return new Promise(function(resolve, reject) {
// 		return db('Locations').insert(params.Location)
// 		.then(function(result) {
// 			console.log('result inside createLocation inside dishModel', result)
// 			return resolve(result)
// 		})
// 	})
// }




