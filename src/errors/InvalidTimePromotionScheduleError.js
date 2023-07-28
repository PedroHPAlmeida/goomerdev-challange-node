const InvalidPromotionError = require("./InvalidPromotionError");

class InvalidTimePromotionScheduleError extends InvalidPromotionError{
    
	constructor(message = "Invalid time for promotion schedule") {
		super(message);
	}

}

module.exports = InvalidTimePromotionScheduleError;
