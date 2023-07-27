const Service = require("./Service");
const RestaurantService = require("./RestaurantService");
const ProductService = require("./ProductService");
const { InvalidPromotionError } = require("../errors");

const restaurantService = new RestaurantService();
const productService = new ProductService();

class PromotionService extends Service {

	constructor() {
		super("Promotion");
	}

	async createPromotion(promotion, restaurantId, productId) {
		await this.#validatePromotion(promotion, restaurantId, productId);
		return await this.model.create({ ...promotion, product_id: productId });
	}

	async #validatePromotion(promotion, restaurantId, productId) {
		await restaurantService.findById(restaurantId);
		const product = await productService.findById(productId);
		if (promotion.promotionalPrice >= product.price) {
			throw new InvalidPromotionError("Promotion price must be less than current price");
		}
	}

}

module.exports = PromotionService;
