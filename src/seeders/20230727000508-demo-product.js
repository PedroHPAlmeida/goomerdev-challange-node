"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
    
		await queryInterface.bulkInsert("Products", [
			// Restaurante 1
			{
				name: "Doce de Leite",
				photo: null,
				price: 10.5,
				restaurant_id: 1,
				category_id: 2,
				createdAt: "2023-07-21 12:34:56",
				updatedAt: "2023-07-21 12:34:56"
			},
			{
				name: "Pastel de Queijo",
				photo: null,
				price: 8.0,
				restaurant_id: 1,
				category_id: 1,
				createdAt: "2023-07-21 12:35:01",
				updatedAt: "2023-07-21 12:35:01"
			},
			{
				name: "Água Mineral",
				photo: null,
				price: 3.0,
				restaurant_id: 1,
				category_id: 3,
				createdAt: "2023-07-21 12:35:10",
				updatedAt: "2023-07-21 12:35:10"
			},
			{
				name: "Pudim",
				photo: null,
				price: 12.0,
				restaurant_id: 1,
				category_id: 4,
				createdAt: "2023-07-21 12:35:18",
				updatedAt: "2023-07-21 12:35:18"
			},
			{
				name: "Banana",
				photo: null,
				price: 2.5,
				restaurant_id: 1,
				category_id: 5,
				createdAt: "2023-07-21 12:35:24",
				updatedAt: "2023-07-21 12:35:24"
			},
			// Restaurante 2
			{
				name: "Brigadeiro",
				photo: null,
				price: 2.0,
				restaurant_id: 2,
				category_id: 2,
				createdAt: "2023-07-21 12:36:15",
				updatedAt: "2023-07-21 12:36:15"
			},
			{
				name: "Coxinha",
				photo: null,
				price: 5.5,
				restaurant_id: 2,
				category_id: 1,
				createdAt: "2023-07-21 12:36:22",
				updatedAt: "2023-07-21 12:36:22"
			},
			{
				name: "Refrigerante",
				photo: null,
				price: 4.0,
				restaurant_id: 2,
				category_id: 3,
				createdAt: "2023-07-21 12:36:31",
				updatedAt: "2023-07-21 12:36:31"
			},
			{
				name: "Torta de Limão",
				photo: null,
				price: 15.0,
				restaurant_id: 2,
				category_id: 4,
				createdAt: "2023-07-21 12:36:39",
				updatedAt: "2023-07-21 12:36:39"
			},
			{
				name: "Maçã",
				photo: null,
				price: 2.0,
				restaurant_id: 2,
				category_id: 5,
				createdAt: "2023-07-21 12:36:47",
				updatedAt: "2023-07-21 12:36:47"
			},
			// Restaurante 3
			{
				name: "Bolo de Chocolate",
				photo: null,
				price: 18.0,
				restaurant_id: 3,
				category_id: 2,
				createdAt: "2023-07-21 12:37:34",
				updatedAt: "2023-07-21 12:37:34"
			},
			{
				name: "Empada de Frango",
				photo: null,
				price: 6.0,
				restaurant_id: 3,
				category_id: 1,
				createdAt: "2023-07-21 12:37:42",
				updatedAt: "2023-07-21 12:37:42"
			},
			{
				name: "Suco de Laranja",
				photo: null,
				price: 4.5,
				restaurant_id: 3,
				category_id: 3,
				createdAt: "2023-07-21 12:37:51",
				updatedAt: "2023-07-21 12:37:51"
			},
			{
				name: "Cheesecake",
				photo: null,
				price: 16.0,
				restaurant_id: 3,
				category_id: 4,
				createdAt: "2023-07-21 12:37:59",
				updatedAt: "2023-07-21 12:37:59"
			},
			{
				name: "Kiwi",
				photo: null,
				price: 3.5,
				restaurant_id: 3,
				category_id: 5,
				createdAt: "2023-07-21 12:38:06",
				updatedAt: "2023-07-21 12:38:06"
			},
			// Restaurante 4
			{
				name: "Romeu e Julieta",
				photo: null,
				price: 9.0,
				restaurant_id: 4,
				category_id: 2,
				createdAt: "2023-07-21 12:38:53",
				updatedAt: "2023-07-21 12:38:53"
			},
			{
				name: "Pastel de Carne",
				photo: null,
				price: 7.0,
				restaurant_id: 4,
				category_id: 1,
				createdAt: "2023-07-21 12:39:00",
				updatedAt: "2023-07-21 12:39:00"
			},
			{
				name: "Chá Gelado",
				photo: null,
				price: 3.5,
				restaurant_id: 4,
				category_id: 3,
				createdAt: "2023-07-21 12:39:09",
				updatedAt: "2023-07-21 12:39:09"
			},
			{
				name: "Tiramisù",
				photo: null,
				price: 20.0,
				restaurant_id: 4,
				category_id: 4,
				createdAt: "2023-07-21 12:39:17",
				updatedAt: "2023-07-21 12:39:17"
			},
			{
				name: "Manga",
				photo: null,
				price: 2.0,
				restaurant_id: 4,
				category_id: 5,
				createdAt: "2023-07-21 12:39:23",
				updatedAt: "2023-07-21 12:39:23"
			},
			// Restaurante 5
			{
				name: "Pavê",
				photo: null,
				price: 12.0,
				restaurant_id: 5,
				category_id: 2,
				createdAt: "2023-07-21 12:40:13",
				updatedAt: "2023-07-21 12:40:13"
			},
			{
				name: "Kibe",
				photo: null,
				price: 6.5,
				restaurant_id: 5,
				category_id: 1,
				createdAt: "2023-07-21 12:40:20",
				updatedAt: "2023-07-21 12:40:20"
			},
			{
				name: "Café",
				photo: null,
				price: 4.0,
				restaurant_id: 5,
				category_id: 3,
				createdAt: "2023-07-21 12:40:29",
				updatedAt: "2023-07-21 12:40:29"
			},
			{
				name: "Cheesecake de Morango",
				photo: null,
				price: 18.0,
				restaurant_id: 5,
				category_id: 4,
				createdAt: "2023-07-21 12:40:37",
				updatedAt: "2023-07-21 12:40:37"
			},
			{
				name: "Abacaxi",
				photo: null,
				price: 3.5,
				restaurant_id: 5,
				category_id: 5,
				createdAt: "2023-07-21 12:40:44",
				updatedAt: "2023-07-21 12:40:44"
			},
			// Restaurante 6
			{
				name: "Cajuzinho",
				photo: null,
				price: 2.5,
				restaurant_id: 6,
				category_id: 2,
				createdAt: "2023-07-21 12:41:32",
				updatedAt: "2023-07-21 12:41:32"
			},
			{
				name: "Esfiha de Carne",
				photo: null,
				price: 5.0,
				restaurant_id: 6,
				category_id: 1,
				createdAt: "2023-07-21 12:41:40",
				updatedAt: "2023-07-21 12:41:40"
			},
			{
				name: "Mate Gelado",
				photo: null,
				price: 4.0,
				restaurant_id: 6,
				category_id: 3,
				createdAt: "2023-07-21 12:41:48",
				updatedAt: "2023-07-21 12:41:48"
			},
			{
				name: "Torta de Morango",
				photo: null,
				price: 15.0,
				restaurant_id: 6,
				category_id: 4,
				createdAt: "2023-07-21 12:41:55",
				updatedAt: "2023-07-21 12:41:55"
			},
			{
				name: "Goiaba",
				photo: null,
				price: 2.0,
				restaurant_id: 6,
				category_id: 5,
				createdAt: "2023-07-21 12:42:02",
				updatedAt: "2023-07-21 12:42:02"
			},
			// Restaurante 7
			{
				name: "Quindim",
				photo: null,
				price: 4.0,
				restaurant_id: 7,
				category_id: 2,
				createdAt: "2023-07-21 12:42:48",
				updatedAt: "2023-07-21 12:42:48"
			},
			{
				name: "Pastel de Palmito",
				photo: null,
				price: 6.0,
				restaurant_id: 7,
				category_id: 1,
				createdAt: "2023-07-21 12:42:56",
				updatedAt: "2023-07-21 12:42:56"
			},
			{
				name: "Cerveja",
				photo: null,
				price: 5.0,
				restaurant_id: 7,
				category_id: 3,
				createdAt: "2023-07-21 12:43:04",
				updatedAt: "2023-07-21 12:43:04"
			},
			{
				name: "Pavê de Chocolate",
				photo: null,
				price: 14.0,
				restaurant_id: 7,
				category_id: 4,
				createdAt: "2023-07-21 12:43:12",
				updatedAt: "2023-07-21 12:43:12"
			},
			{
				name: "Laranja",
				photo: null,
				price: 2.0,
				restaurant_id: 7,
				category_id: 5,
				createdAt: "2023-07-21 12:43:18",
				updatedAt: "2023-07-21 12:43:18"
			},
			// Restaurante 8
			{
				name: "Beijinho",
				photo: null,
				price: 3.0,
				restaurant_id: 8,
				category_id: 2,
				createdAt: "2023-07-21 12:44:04",
				updatedAt: "2023-07-21 12:44:04"
			},
			{
				name: "Empada de Palmito",
				photo: null,
				price: 6.5,
				restaurant_id: 8,
				category_id: 1,
				createdAt: "2023-07-21 12:44:12",
				updatedAt: "2023-07-21 12:44:12"
			},
			{
				name: "Suco de Uva",
				photo: null,
				price: 4.5,
				restaurant_id: 8,
				category_id: 3,
				createdAt: "2023-07-21 12:44:21",
				updatedAt: "2023-07-21 12:44:21"
			},
			{
				name: "Torta de Banana",
				photo: null,
				price: 16.0,
				restaurant_id: 8,
				category_id: 4,
				createdAt: "2023-07-21 12:44:29",
				updatedAt: "2023-07-21 12:44:29"
			},
			{
				name: "Melancia",
				photo: null,
				price: 3.0,
				restaurant_id: 8,
				category_id: 5,
				createdAt: "2023-07-21 12:44:35",
				updatedAt: "2023-07-21 12:44:35"
			},
			// Restaurante 9
			{
				name: "Pé de Moleque",
				photo: null,
				price: 3.5,
				restaurant_id: 9,
				category_id: 2,
				createdAt: "2023-07-21 12:45:20",
				updatedAt: "2023-07-21 12:45:20"
			},
			{
				name: "Esfiha de Frango",
				photo: null,
				price: 5.5,
				restaurant_id: 9,
				category_id: 1,
				createdAt: "2023-07-21 12:45:28",
				updatedAt: "2023-07-21 12:45:28"
			},
			{
				name: "Chá Quente",
				photo: null,
				price: 3.0,
				restaurant_id: 9,
				category_id: 3,
				createdAt: "2023-07-21 12:45:36",
				updatedAt: "2023-07-21 12:45:36"
			},
			{
				name: "Cheesecake de Abacaxi",
				photo: null,
				price: 17.0,
				restaurant_id: 9,
				category_id: 4,
				createdAt: "2023-07-21 12:45:44",
				updatedAt: "2023-07-21 12:45:44"
			},
			{
				name: "Uva",
				photo: null,
				price: 2.0,
				restaurant_id: 9,
				category_id: 5,
				createdAt: "2023-07-21 12:45:51",
				updatedAt: "2023-07-21 12:45:51"
			},
			// Restaurante 10
			{
				name: "Cocada",
				photo: null,
				price: 4.0,
				restaurant_id: 10,
				category_id: 2,
				createdAt: "2023-07-21 12:46:37",
				updatedAt: "2023-07-21 12:46:37"
			},
			{
				name: "Pastel de Queijo e Presunto",
				photo: null,
				price: 7.0,
				restaurant_id: 10,
				category_id: 1,
				createdAt: "2023-07-21 12:46:45",
				updatedAt: "2023-07-21 12:46:45"
			},
			{
				name: "Suco de Limão",
				photo: null,
				price: 4.5,
				restaurant_id: 10,
				category_id: 3,
				createdAt: "2023-07-21 12:46:54",
				updatedAt: "2023-07-21 12:46:54"
			},
			{
				name: "Torta de Maçã",
				photo: null,
				price: 15.0,
				restaurant_id: 10,
				category_id: 4,
				createdAt: "2023-07-21 12:47:01",
				updatedAt: "2023-07-21 12:47:01"
			},
			{
				name: "Cereja",
				photo: null,
				price: 4.0,
				restaurant_id: 10,
				category_id: 5,
				createdAt: "2023-07-21 12:47:08",
				updatedAt: "2023-07-21 12:47:08"
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
