import loadActiveNotes from "./loadActiveNotes";
import loadArchivedNotes from "./loadArchivedNotes";
import loadSummary from "./loadSummary";

function loadStartingData() {
	const activeNotesElements = loadActiveNotes();
	document
		.querySelector(".active-table .table-header")
		.insertAdjacentHTML("afterend", activeNotesElements.join(""));

	const archivedNotesElements = loadArchivedNotes();
	document
		.querySelector(".archived-table .table-header")
		.insertAdjacentHTML("afterend", archivedNotesElements.join(""));

	const summaryElements = loadSummary();
	document
		.querySelector(".summary-table .table-header")
		.insertAdjacentHTML("afterend", summaryElements.join(""));
}

export default loadStartingData;
