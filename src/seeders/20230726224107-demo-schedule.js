"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		
		await queryInterface.bulkInsert("Schedules", [
			{
				restaurant_id: 1,
				firstDay: "segunda",
				lastDay: "sexta",
				openingTime: "10:00:00",
				closingTime: "22:00:00",
				createdAt: "2023-07-19 12:34:56",
				updatedAt: "2023-07-19 12:34:56"
			},
			{
				restaurant_id: 1,
				firstDay: "sábado",
				lastDay: "domingo",
				openingTime: "11:30:00",
				closingTime: "20:00:00",
				createdAt: "2023-07-20 10:12:34",
				updatedAt: "2023-07-20 10:12:34"
			},
			{
				restaurant_id: 2,
				firstDay: "terça",
				lastDay: "sábado",
				openingTime: "11:00:00",
				closingTime: "23:00:00",
				createdAt: "2023-07-20 11:22:33",
				updatedAt: "2023-07-20 11:22:33"
			},
			{
				restaurant_id: 2,
				firstDay: "domingo",
				lastDay: "domingo",
				openingTime: "12:00:00",
				closingTime: "21:00:00",
				createdAt: "2023-07-20 11:22:33",
				updatedAt: "2023-07-20 11:22:33"
			},
			{
				restaurant_id: 3,
				firstDay: "quarta",
				lastDay: "quarta",
				openingTime: "18:00:00",
				closingTime: "23:00:00",
				createdAt: "2023-07-20 14:45:55",
				updatedAt: "2023-07-20 14:45:55"
			},
			{
				restaurant_id: 3,
				firstDay: "sexta",
				lastDay: "sábado",
				openingTime: "12:30:00",
				closingTime: "22:30:00",
				createdAt: "2023-07-20 14:45:55",
				updatedAt: "2023-07-20 14:45:55"
			},
			{
				restaurant_id: 4,
				firstDay: "segunda",
				lastDay: "quinta",
				openingTime: "11:30:00",
				closingTime: "20:30:00",
				createdAt: "2023-07-20 16:55:43",
				updatedAt: "2023-07-20 16:55:43"
			},
			{
				restaurant_id: 4,
				firstDay: "sábado",
				lastDay: "domingo",
				openingTime: "10:00:00",
				closingTime: "19:00:00",
				createdAt: "2023-07-20 16:55:43",
				updatedAt: "2023-07-20 16:55:43"
			},
			{
				restaurant_id: 5,
				firstDay: "quarta",
				lastDay: "domingo",
				openingTime: "12:00:00",
				closingTime: "22:00:00",
				createdAt: "2023-07-20 19:30:10",
				updatedAt: "2023-07-20 19:30:10"
			},
			{
				restaurant_id: 5,
				firstDay: "segunda",
				lastDay: "sexta",
				openingTime: "10:30:00",
				closingTime: "21:30:00",
				createdAt: "2023-07-20 19:30:10",
				updatedAt: "2023-07-20 19:30:10"
			},
			{
				restaurant_id: 6,
				firstDay: "terça",
				lastDay: "quinta",
				openingTime: "17:00:00",
				closingTime: "23:00:00",
				createdAt: "2023-07-21 08:15:22",
				updatedAt: "2023-07-21 08:15:22"
			},
			{
				restaurant_id: 6,
				firstDay: "sábado",
				lastDay: "domingo",
				openingTime: "12:00:00",
				closingTime: "20:00:00",
				createdAt: "2023-07-21 08:15:22",
				updatedAt: "2023-07-21 08:15:22"
			},
			{
				restaurant_id: 7,
				firstDay: "sexta",
				lastDay: "domingo",
				openingTime: "10:00:00",
				closingTime: "21:30:00",
				createdAt: "2023-07-21 11:40:57",
				updatedAt: "2023-07-21 11:40:57"
			},
			{
				restaurant_id: 7,
				firstDay: "segunda",
				lastDay: "quarta",
				openingTime: "11:00:00",
				closingTime: "22:00:00",
				createdAt: "2023-07-21 11:40:57",
				updatedAt: "2023-07-21 11:40:57"
			},
			{
				restaurant_id: 8,
				firstDay: "quarta",
				lastDay: "sexta",
				openingTime: "12:00:00",
				closingTime: "20:30:00",
				createdAt: "2023-07-21 14:20:33",
				updatedAt: "2023-07-21 14:20:33"
			},
			{
				restaurant_id: 8,
				firstDay: "domingo",
				lastDay: "domingo",
				openingTime: "11:30:00",
				closingTime: "19:30:00",
				createdAt: "2023-07-21 14:20:33",
				updatedAt: "2023-07-21 14:20:33"
			},
			{
				restaurant_id: 9,
				firstDay: "quinta",
				lastDay: "sábado",
				openingTime: "18:00:00",
				closingTime: "23:00:00",
				createdAt: "2023-07-21 16:55:12",
				updatedAt: "2023-07-21 16:55:12"
			},
			{
				restaurant_id: 9,
				firstDay: "segunda",
				lastDay: "quarta",
				openingTime: "10:30:00",
				closingTime: "22:30:00",
				createdAt: "2023-07-21 16:55:12",
				updatedAt: "2023-07-21 16:55:12"
			},
			{
				restaurant_id: 10,
				firstDay: "sábado",
				lastDay: "domingo",
				openingTime: "12:00:00",
				closingTime: "21:00:00",
				createdAt: "2023-07-21 19:45:23",
				updatedAt: "2023-07-21 19:45:23"
			},
			{
				restaurant_id: 10,
				firstDay: "terça",
				lastDay: "quinta",
				openingTime: "11:30:00",
				closingTime: "20:30:00",
				createdAt: "2023-07-21 19:45:23",
				updatedAt: "2023-07-21 19:45:23"
			}
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
