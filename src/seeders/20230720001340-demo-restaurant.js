"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Restaurants", [
			{
				"name": "Restaurante Boa Vista",
				"photo": null,
				"address": "Rua das Flores 58, Jardins - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Delícia do Mar",
				"photo": null,
				"address": "Avenida das Gaivotas 123, Praia Grande - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Sabor Campestre",
				"photo": null,
				"address": "Estrada dos Ipês 456, Campo Alegre - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Sabores da Terra",
				"photo": null,
				"address": "Rua das Árvores 789, Vale Verde - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Canto da Serra",
				"photo": null,
				"address": "Rua dos Pássaros 321, Monte Alto - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Fonte da Saúde",
				"photo": null,
				"address": "Alameda das Flores 987, Jardim Sereno - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Sabor Oriental",
				"photo": null,
				"address": "Avenida dos Bons Ventos 234, Mar Azul - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Raízes Brasileiras",
				"photo": null,
				"address": "Rua das Palmeiras 567, Bela Vista - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Tempero Caseiro",
				"photo": null,
				"address": "Travessa das Oliveiras 543, Serra Dourada - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			},
			{
				"name": "Restaurante Gosto Gostoso",
				"photo": null,
				"address": "Praça das Orquídeas 876, Jardim das Flores - SP",
				"createdAt": "2023-07-19 12:34:56",
				"updatedAt": "2023-07-19 12:34:56"
			}
		] , {});
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
