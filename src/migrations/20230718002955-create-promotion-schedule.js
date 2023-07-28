"use strict";
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
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			dayEnd: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			timeStart: {
				type: Sequelize.TIME,
				allowNull: false
			},
			timeEnd: {
				type: Sequelize.TIME,
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