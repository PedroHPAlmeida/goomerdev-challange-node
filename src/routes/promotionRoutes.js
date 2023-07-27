const { Router } = require("express");
const { PromotionController } = require("../controllers");

const router = Router();

router
	.post("/api/restaurants/:restaurantId/products/:productId/promotions", PromotionController.create);

module.exports = router;
