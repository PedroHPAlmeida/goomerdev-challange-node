"use strict";
const daysOfWeekEnum = require("../utils/daysOfWeek");
const daysOfWeek = daysOfWeekEnum.getValues();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Schedules", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			restaurant_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Restaurants", key: "id" }
			},
			firstDay: {
				type: Sequelize.ENUM,
				values: daysOfWeek,
				allowNull: false,
			},
			lastDay: {
				type: Sequelize.ENUM,
				values: daysOfWeek,
				allowNull: false,
			},
			openingTime: {
				type: Sequelize.TIME,
				allowNull: false,
			},
			closingTime: {
				type: Sequelize.TIME,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Schedules");
	}
};