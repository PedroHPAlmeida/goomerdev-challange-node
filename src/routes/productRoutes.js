const { Router } = require("express");
const { ProductController } = require("../controllers");

const router = Router();

router
	.post("/api/restaurants/:restaurantId/products", ProductController.create);

module.exports = router;
