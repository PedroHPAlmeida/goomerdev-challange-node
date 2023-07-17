const express = require("express");

const routes = (app) => {
	app.route("/").get((req, res) => {
		res.status(200).json({ status: "UP" });
	});
	app.use(express.json());
};

module.exports = routes;
