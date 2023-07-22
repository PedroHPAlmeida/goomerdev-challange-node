const express = require("express");
const restaurants = require("./restaurantRoutes");

const routes = (app) => {
	app.route("/").get((req, res) => {
		res.status(200).json({ status: "UP" });
	});
	app.use(express.json(),
		restaurants);
};

module.exports = routes;
