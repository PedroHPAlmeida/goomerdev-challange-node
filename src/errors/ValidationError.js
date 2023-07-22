const BadRequestError = require("./BadRequestError");

class ValidationError extends BadRequestError {

	constructor(errors) {
		const errs = errors.map(e => e.message).join("; ");
		super(errs);
	}

}

module.exports = ValidationError;
