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

	static async findById(req, res, next) {
		const { id } = req.params;
		try {
			const restaurant = await restaurantService.findById(Number(id));
			res.status(200).json(restaurant);
		} catch (error) {
			next(error);
		}
	}

	static async create(req, res, next) {
		const body = req.body;
		try {
			const restaurant = await restaurantService.create(body);
			res.status(201).json(restaurant);
		} catch (error) {
			next(error);
		}
	}

	static async updateById(req, res, next) {
		const { id } = req.params;
		const restaurant = req.body;
		try {
			await restaurantService.update(restaurant, { id: Number(id) });
			res.status(204).send();
		} catch (error) {
			next(error);
		}
	}

	static async deleteById(req, res, next) {
		const { id } = req.params;
		try {
			await restaurantService.delete({ id: Number(id) });
			res.status(204).send();
		} catch (error) {
			next(error);
		}
	}

}

module.exports = RestaurantController;
