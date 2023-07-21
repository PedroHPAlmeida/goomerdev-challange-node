const { BaseError, ValidationError } = require("../errors"); 
const { ValidationError: ValidationErrorSeq} = require("sequelize");

function handler(error, req, res, next) {
	console.log(error);
	if (error instanceof ValidationErrorSeq) {
		new ValidationError(error.errors).send(res);
	} else {
		new BaseError().send(res);
	}

}

module.exports = handler;
