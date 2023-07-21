const { Router } = require("express");
const RestaurantController = require("../controllers/RestaurantController");

const router = Router();

router
	.post("/api/restaurants", RestaurantController.create)
	.get("/api/restaurants", RestaurantController.findAll);

module.exports = router;
