const { Router } = require("express");
const RestaurantController = require("../controllers/RestaurantController");

const router = Router();

router
	.get("/api/restaurants", RestaurantController.findAll);

module.exports = router;
