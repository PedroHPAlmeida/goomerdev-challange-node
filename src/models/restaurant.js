"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Restaurant extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			Restaurant.hasMany(models.Schedule, { foreignKey: "restaurant_id" });
			Restaurant.hasMany(models.Product, { foreignKey: "restaurant_id" });
		}
	}
	Restaurant.init({
		name: { 
			type: DataTypes.STRING,
			allowNull: false
		},
		photo: DataTypes.BLOB,
		address: { 
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: "Restaurant",
	});
	return Restaurant;
};
