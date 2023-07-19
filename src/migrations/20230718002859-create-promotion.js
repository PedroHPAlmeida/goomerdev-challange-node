"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Promotions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			product_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Products", key: "id" }
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false
			},
			promotionalPrice: {
				type: Sequelize.DECIMAL,
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
		await queryInterface.dropTable("Promotions");
	}
};