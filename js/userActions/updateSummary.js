import getRowCategory from "../helpers/getRowCategory";

function updateSummary(element, action) {
	try {
		const category = getRowCategory(element);
		const rowToUpdate = document
			.querySelector(`.${category}-summary`)
			.closest(".row");

		let activeNotesElem = rowToUpdate.querySelector(".active-summary");
		const numOfActive = +activeNotesElem.innerText;

		let archivedNotesElem = rowToUpdate.querySelector(".archived-summary");
		const numOfArchived = +archivedNotesElem.innerText;

		switch (action) {
			case "active":
				activeNotesElem.innerText = numOfActive + 1;
				archivedNotesElem.innerText = numOfArchived - 1;
				break;
			case "archive":
				activeNotesElem.innerText = numOfActive - 1;
				archivedNotesElem.innerText = numOfArchived + 1;
				break;
			case "create":
				activeNotesElem.innerText = numOfActive + 1;
				break;
			case "delete active":
				activeNotesElem.innerText = numOfActive - 1;
				break;
			case "delete archive":
				archivedNotesElem.innerText = numOfArchived - 1;
				break;
		}
	} catch (e) {
		console.error(new Error("The summary update cannot be conducted!"));
	}
}

export default updateSummary;
