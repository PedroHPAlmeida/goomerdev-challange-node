const Service = require("./Service");
const { InvalidTimePromotionScheduleError } = require("../errors");

class PromotionScheduleService extends Service {

	constructor() {
		super("PromotionSchedule");
	}

	validatePromotionSchedules(schedules) {
		schedules.forEach(schedule => {
			const MIN_DIFFERENCE_BETWEEN_PROMOTION_SCHEDULE_TIME = 900000; // 15 minutes

			const [ startHour, startMinute, startSecond ] = schedule.timeStart.split(":");
			const [ endHour, endMinute, endSecond ] = schedule.timeEnd.split(":");

			const timeStart = new Date(0, 0, 0, startHour, startMinute, startSecond, 0).getTime();
			const timeEnd = new Date(0, 0, 0, endHour, endMinute, endSecond, 0).getTime();
			const difference = timeEnd - timeStart;

			if (difference < MIN_DIFFERENCE_BETWEEN_PROMOTION_SCHEDULE_TIME) {
				throw new InvalidTimePromotionScheduleError(`The minimum difference between promotion times must be ${(MIN_DIFFERENCE_BETWEEN_PROMOTION_SCHEDULE_TIME / 1000) / 60} minutes`);
			}
		});
	}

}

module.exports = PromotionScheduleService;
