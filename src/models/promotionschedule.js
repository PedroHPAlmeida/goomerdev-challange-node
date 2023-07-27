"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class PromotionSchedule extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			PromotionSchedule.belongsTo(models.Promotion, { foreignKey: "promotion_id" });
		}
	}
	PromotionSchedule.init({
		dayStart: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				notEmpty: true,
				isDate: true
			}
		},
		dayEnd: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				notEmpty: true,
				isDate: true
			}
		},
		timeStart: {
			type: DataTypes.TIME,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		timeEnd: {
			type: DataTypes.TIME,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		}
	}, {
		sequelize,
		modelName: "PromotionSchedule",
	});
	return PromotionSchedule;
};