"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Promotion extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			Promotion.hasOne(models.Product, { foreignKey: "product_id" });
			Promotion.hasMany(models.PromotionSchedule, { foreignKey: "promotion_schedule_id" });
		}
	}
	Promotion.init({
		description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		promotionalPrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: "Promotion",
	});
	return Promotion;
};