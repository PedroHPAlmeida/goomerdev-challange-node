const { ProductService } = require("../services");
const productService = new ProductService();

class ProductController {

	static async create(req, res, next) {
		const { restaurantId } = req.params;
		const body = req.body;
		try {
			const product = await productService.create({ ...body, restaurant_id: Number(restaurantId), category_id: body.categoryId});
			res.status(201).json(product);
		} catch(error) {
			next(error);
		}     
	}

}

module.exports = ProductController;
