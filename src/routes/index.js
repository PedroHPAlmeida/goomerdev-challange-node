const express = require("express");
const restaurants = require("./restaurantRoutes");
const products = require("./productRoutes");
const promotions = require("./promotionRoutes");

const routes = (app) => {
	app.route("/").get((req, res) => {
		res.status(200).json({ status: "UP" });
	});
	app.use(express.json(),
		restaurants,
		products,
		promotions);
};

module.exports = routes;
