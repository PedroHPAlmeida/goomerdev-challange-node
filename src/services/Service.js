const db = require("../models");
const { NotFoundError } = require("../errors");


class Service {

	constructor(modelName) {
		this.modelName = modelName;
		this.model = db[modelName];
	}

	async findAll(where = {}) {
		return await this.model.findAll({ where: { ...where } }) ;
	}

	async findById(id) {
		const entity = await this.model.findByPk(id);
		if (!entity) {
			throw new NotFoundError(`${this.modelName} with id ${id} not found`);
		}
	}

	async create(entity) {
		return await this.model.create(entity);
	}

}

module.exports = Service;
