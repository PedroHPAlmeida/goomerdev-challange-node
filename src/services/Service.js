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

	async delete(where) {
		if (!where || Object.keys(where).length < 1) {
			throw new Error("It is not possible to delete a record without specifying the where clause");
		}
		const entities = await this.findAll(where);
		if (entities.length === 0) {
			throw new NotFoundError(`${this.modelName} not found`);
		}
		await this.model.destroy({ where: { ...where } });
	}

}

module.exports = Service;
