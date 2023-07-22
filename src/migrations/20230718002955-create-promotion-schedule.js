"use strict";
const daysOfWeekEnum = require("../utils/daysOfWeek");
const daysOfWeek = daysOfWeekEnum.getValues();
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("PromotionSchedules", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			promotion_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Promotions", key: "id" }
			},
			dayStart: {
				type: Sequelize.DATE,
				values: daysOfWeek,
				allowNull: false
			},
			dayEnd: {
				type: Sequelize.DATE,
				values: daysOfWeek,
				allowNull: false
			},
			timeStart: {
				type: Sequelize.DATE,
				allowNull: false
			},
			timeEnd: {
				type: Sequelize.DATE,
				allowNull: false
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
		await queryInterface.dropTable("PromotionSchedules");
	}
};