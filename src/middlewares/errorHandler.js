const { BaseError, ValidationError, NotFoundError, InvalidPromotionError } = require("../errors"); 
const { ValidationError: ValidationErrorSeq} = require("sequelize");

function handler(error, req, res, next) {
	console.log(`Error: ${error.message}`);
	if (error instanceof ValidationErrorSeq) {
		new ValidationError(error.errors).send(res);
	} else if (error instanceof NotFoundError) {
		error.send(res);
	} else if (error instanceof InvalidPromotionError) {
		error.send(res);
	} else {
		new BaseError().send(res);
	}

}

module.exports = handler;
