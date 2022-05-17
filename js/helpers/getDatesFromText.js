function getDatesFromText(text) {
	try {
		const year = "(20[012][0-9])";
		const month = "((0?[0-9])|(1[012]))";
		const day = "((0?[1-9])|([12]?[0-9])|(3[01]))";

		const dashedYearToDay = new RegExp(`${year}-${month}-${day}`, "g");
		const dashedDayToYear = new RegExp(`${day}-${month}-${year}`, "g");
		const slashedYearToDay = new RegExp(`${year}\/${month}\/${day}`, "g");
		const slashedDayToYear = new RegExp(`${day}\/${month}\/${year}`, "g");
		const dottedYearToDay = new RegExp(`${year}\\.${month}\\.${day}`, "g");
		const dottedDayToYear = new RegExp(`${day}\\.${month}\\.${year}`, "g");

		const format1 = text.match(dashedYearToDay) || [];
		const format2 = text.match(dashedDayToYear) || [];
		const format3 = text.match(slashedYearToDay) || [];
		const format4 = text.match(slashedDayToYear) || [];
		const format5 = text.match(dottedYearToDay) || [];
		const format6 = text.match(dottedDayToYear) || [];

		const dates = [
			...format1,
			...format2,
			...format3,
			...format4,
			...format5,
			...format6,
		];

		return dates.join(", ");
	} catch (e) {
		console.log(e);
	}
}

export default getDatesFromText;
