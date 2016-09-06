var searchGooglePlacesModel = require('../model/searchGoogle.model.js');

exports.searchGooglePlacesModel = {
	getRestaurantList: getRestaurantList
}

function getRestaurantList(req, res) {
	searchGooglePlacesModel.getRestaurantList(req.body, res);
}
