module.exports = { 
	MONDAY: "segunda",
	TUESDAY: "terça",
	WEDNESDAY: "quarta",
	THURSDAY: "quinta",
	FRIDAY: "sexta",
	SATURDAY: "sábado",
	SUNDAY: "domingo",

	getValues() {
		const values = Object.values(this);
		values.pop();
		return values;
	}
};
