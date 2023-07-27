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
			Promotion.belongsTo(models.Product, { foreignKey: "product_id" });
			Promotion.hasMany(models.PromotionSchedule, { foreignKey: "promotion_id" });
		}
	}
	Promotion.init({
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		promotionalPrice: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			validate: {
				isNumeric: true,
				min: {
					args: 0.5,
					msg: "The min value for a promotion is 0.5"
				}
			}
		}
	}, {
		sequelize,
		modelName: "Promotion",
	});
	return Promotion;
};