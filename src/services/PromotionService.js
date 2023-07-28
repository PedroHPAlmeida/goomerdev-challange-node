const db = require("../models");
const Service = require("./Service");
const RestaurantService = require("./RestaurantService");
const ProductService = require("./ProductService");
const PromotionScheduleService = require("./PromotionScheduleService");
const { InvalidPromotionError } = require("../errors");

const restaurantService = new RestaurantService();
const productService = new ProductService();
const promotionScheduleService = new PromotionScheduleService();

class PromotionService extends Service {

	constructor() {
		super("Promotion");
	}

	async createPromotion(promotion, restaurantId, productId) {
		await this.#validatePromotion(promotion, restaurantId, productId);

		const promotionToSave = {
			description: promotion.description,
			promotionalPrice: promotion.promotionalPrice
		};

		const schedules = promotion.schedules;

		return db.sequelize.transaction(async (t) => {
			const savedPromotion = await this.model.create({ ...promotionToSave, product_id: productId }, { transaction: t });
			const savedSchedules = await Promise.all(schedules.map(schedule => {
				return promotionScheduleService.create({ ...schedule, promotion_id: savedPromotion.id }, { transaction: t });
			}));
			savedPromotion.dataValues.schedules = savedSchedules;
			return savedPromotion;
		});
	}

	async #validatePromotion(promotion, restaurantId, productId) {
		await restaurantService.findById(restaurantId);
		const product = await productService.findById(productId);
		if (promotion.promotionalPrice >= product.price) {
			throw new InvalidPromotionError("Promotion price must be less than current price");
		}
		promotionScheduleService.validatePromotionSchedules(promotion.schedules);
	}

}

module.exports = PromotionService;
