const { Router } = require("express");
const { ProductController } = require("../controllers");

const router = Router();

router
	.post("/api/restaurants/:restaurantId/products", ProductController.create)
	.get("/api/restaurants/:restaurantId/products", ProductController.findAll)
	.put("/api/restaurants/:restaurantId/products/:productId", ProductController.updateById);

module.exports = router;
