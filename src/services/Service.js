const db = require("../models");

class Service {

	constructor(modelName) {
		this.modelName = modelName;
		this.model = db[modelName];
	}

	async findAll(where = {}) {
		return await this.model.findAll({ where: { ...where } }) ;
	}

}

module.exports = Service;
