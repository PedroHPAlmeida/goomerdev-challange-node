const { ProductService } = require("../services");
const productService = new ProductService();

class ProductController {

	static async findAll(req, res, next) {
		const { restaurantId } = req.params;
		try {
			const products = await productService.findAll({ restaurant_id: Number(restaurantId) });
			res.status(200).json(products);
		} catch (error) {
			next(error);
		}
	}

	static async create(req, res, next) {
		const { restaurantId } = req.params;
		const body = req.body;
		try {
			const product = await productService.create({ ...body, restaurant_id: Number(restaurantId), category_id: body.categoryId});
			res.status(201).json(product);
		} catch (error) {
			next(error);
		}     
	}

	static async updateById(req, res, next) {
		const { restaurantId, productId } = req.params;
		const product = req.body;
		try {
			await productService.update(product, { id: Number(productId), restaurant_id: Number(restaurantId) });
			res.status(204).send();
		} catch (error) {
			next(error);
		}
	}
	
	static async deleteById(req, res, next) {
		const { restaurantId, productId } = req.params;
		try {
			await productService.delete({ id: Number(productId), restaurant_id: Number(restaurantId) });
			res.status(204).send();
		} catch (error) {
			next(error);
		}
	}

}

module.exports = ProductController;
