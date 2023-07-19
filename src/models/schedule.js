"use strict";
const daysOfWeekEnum = require("./daysOfWeek");
const daysOfWeek = daysOfWeekEnum.getValues();
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Schedule extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			Schedule.hasOne(models.Restaurant, { foreignKey: "restaurant_id" });
		}
	}
	Schedule.init({
		firstDay: {
			type: DataTypes.ENUM,
			values: daysOfWeek,
			allowNull: false
		},
		lastDay: {
			type: DataTypes.ENUM,
			values: daysOfWeek,
			allowNull: false
		},
		openingTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		closingTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
	}, {
		sequelize,
		modelName: "Schedule",
	});
	return Schedule;
};
