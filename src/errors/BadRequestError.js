const BaseError = require("./BaseError");

class BadRequestError extends BaseError {
    
	constructor(message = "Bad request error") {
		super(message, 400);
	}

}

module.exports = BadRequestError;
