const db = require("../models");

class Service {

	constructor(modelName) {
		this.modelName = modelName;
		this.model = db[modelName];
	}

	async findAll(where = {}) {
		return await this.model.findAll({ where: { ...where } }) ;
	}

	async create(entity) {
		return await this.model.create(entity);
	}

}

module.exports = Service;
