const Service = require("./Service");
const RestaurantService = require("./RestaurantService");
const ProductService = require("./ProductService");

const restaurantService = new RestaurantService();
const productService = new ProductService();

class PromotionService extends Service {

	constructor() {
		super("Promotion");
	}

	async createPromotion(promotion, restaurantId, productId) {
		await this.validatePromotion(restaurantId, productId);
		return await this.model.create({ ...promotion, product_id: productId });
	}

	async validatePromotion(restaurantId, productId) {
		await restaurantService.findById(restaurantId);
		await productService.findById(productId);
	}

}

module.exports = PromotionService;
