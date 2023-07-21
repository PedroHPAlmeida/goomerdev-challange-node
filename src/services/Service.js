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
			throw new NotFoundError(`${this.modelName} not found`);
		}
		return entity;
	}

	async create(entity) {
		return await this.model.create(entity);
	}

	async update(entity, where = {}) {
		const resultArray = await this.model.update(entity, { where: { ...where } });
		const success = Boolean(resultArray[0]);
		if (!success) {
			throw new NotFoundError(`${this.modelName} not found`);
		}
	}

}

module.exports = Service;
