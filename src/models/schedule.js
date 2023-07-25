"use strict";
const daysOfWeekEnum = require("../utils/daysOfWeek");
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
			Schedule.belongsTo(models.Restaurant, { foreignKey: "restaurant_id" });
		}
	}
	Schedule.init({
		firstDay: {
			type: DataTypes.ENUM,
			values: daysOfWeek,
			allowNull: false,
			validate: {
				isIn: {
					args: [daysOfWeek],
					msg: `The value should be one of: [${daysOfWeek}]`
				},
			}
		},
		lastDay: {
			type: DataTypes.ENUM,
			values: daysOfWeek,
			allowNull: false,
			validate: {
				isIn: {
					args: [daysOfWeek],
					msg: `The value should be one of: [${daysOfWeek}]`
				},
			}
		},
		openingTime: {
			type: DataTypes.TIME,
			allowNull: false
		},
		closingTime: {
			type: DataTypes.TIME,
			allowNull: false
		},
	}, {
		sequelize,
		modelName: "Schedule",
	});
	return Schedule;
};
