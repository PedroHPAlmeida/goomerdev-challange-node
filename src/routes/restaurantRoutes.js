const { Router } = require("express");
const RestaurantController = require("../controllers/RestaurantController");

const router = Router();

router
	.post("/api/restaurants", RestaurantController.create)
	.get("/api/restaurants", RestaurantController.findAll)
	.get("/api/restaurants/:id", RestaurantController.findById)
	.put("/api/restaurants/:id", RestaurantController.update);

module.exports = router;
