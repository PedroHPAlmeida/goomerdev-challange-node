const Service = require("./Service"); 
const db = require("../models");

class RestaurantService extends Service {

	constructor() {
		super("Restaurant");
	}

	async findAll(where = {}) {
		this.model.addScope("withSchedules", {
			include: [
				{
					model: db.Schedule,
					identifier: "aaa",
					attributes: ["id", "firstDay", "lastDay", "openingTime", "closingTime"]
				}
			]
		});
		return await this.model.scope("withSchedules").findAll(where);
	}

	async create(restaurant) {
		const schedules = restaurant["schedules"];
		delete restaurant["schedules"];
		
		return db.sequelize.transaction(async (t) => {
			const savedRestaurant = await db.Restaurant.create(restaurant, { transaction: t });
			const savedSchedules = await Promise.all(schedules.map(schedule => {
				return db.Schedule.create({ ...schedule, restaurant_id: savedRestaurant.id }, { transaction: t });
			}));
			savedRestaurant.dataValues.schedules = savedSchedules;
			return savedRestaurant;
		});
	}

}

module.exports = RestaurantService;
