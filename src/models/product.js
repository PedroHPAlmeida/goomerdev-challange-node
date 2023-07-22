"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			Product.belongsTo(models.Restaurant, { foreignKey: "restaurant_id" });
			Product.belongsTo(models.Category, { foreignKey: "category_id" });
			Product.hasMany(models.Promotion, { foreignKey: "product_id" });
		}
	}
	Product.init({
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		photo: DataTypes.BLOB,
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	}, {
		sequelize,
		modelName: "Product",
	});
	return Product;
};