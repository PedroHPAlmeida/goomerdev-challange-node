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
			PromotionSchedule.belongsTo(models.Promotion, { foreignKey: "promotion_schedule_id" });
		}
	}
	PromotionSchedule.init({
		dayStart: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		dayEnd: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		timeStart: {
			type: DataTypes.DATE,
			allowNull: false
		},
		timeEnd: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: "PromotionSchedule",
	});
	return PromotionSchedule;
};