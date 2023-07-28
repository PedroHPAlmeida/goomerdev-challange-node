const { PromotionService } = require("../services");
const promotionService = new PromotionService();

class PromotionController {

	static async create(req, res, next) {
		const { restaurantId, productId } = req.params;
		const body = req.body;
		try {
			const promotion = await promotionService.createPromotion(body, Number(restaurantId), Number(productId));
			res.status(201).json(promotion);
		} catch (error) {
			next(error);
		}
	} 

}

module.exports = PromotionController;
