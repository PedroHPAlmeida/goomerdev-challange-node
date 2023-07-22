"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Categories", [
			{
				name: "salgados",
				createdAt: "2023-07-21 12:34:56",
				updatedAt: "2023-07-21 12:34:56"
			},
			{
				name: "doces",
				createdAt: "2023-07-21 12:34:56",
				updatedAt: "2023-07-21 12:34:56"
			},
			{
				name: "bebidas",
				createdAt: "2023-07-21 12:34:56",
				updatedAt: "2023-07-21 12:34:56"
			},
			{
				name: "sobremesas",
				createdAt: "2023-07-21 12:34:56",
				updatedAt: "2023-07-21 12:34:56"
			},
			{
				name: "frutas",
				createdAt: "2023-07-21 12:34:56",
				updatedAt: "2023-07-21 12:34:56"
			},
		], {});
	},

	async down (queryInterface, Sequelize) {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	}
};
