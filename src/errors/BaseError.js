class BaseError extends Error {

	constructor(message = "Internal server error", status = 500) {
		super(message);
		this.status = status;
	}

	send(res) {
		res.status(this.status).json({ message: this.message });
	}

}

module.exports = BaseError;
