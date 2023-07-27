const BadRequestError = require("./BadRequestError");

class InvalidPromotionError extends BadRequestError {

	constructor(message = "Invalid promotion error") {
		super(message);
	}

}

module.exports = InvalidPromotionError;
