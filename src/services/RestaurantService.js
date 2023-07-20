const db = require("../models/");

class RestaurantService {

	static async findAll() {
		return await db.Restaurant.findAll();
	}

}

module.exports = RestaurantService;
