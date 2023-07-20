const { RestaurantService } = require("../services");
const restaurantService = new RestaurantService();

class RestaurantController {

	static async findAll(req, res, next) {
		try {
			const restaurants = await restaurantService.findAll();
			res.status(200).json(restaurants);
		} catch (error) {
			console.error(error);
			next(error);
		}
	}

}

module.exports = RestaurantController;
