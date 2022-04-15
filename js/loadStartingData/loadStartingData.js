import { activeNotes, archivedNotes, summaryNotes } from "../config";

function loadStartingData() {
	//load active cards
	const activeNotesElements = activeNotes.map(note => {
		const noteElement = `<div class="row">
        <div></div>
        <div>${note.name}</div>
        <div>${note.createdOn}</div>
        <div>${note.category}</div>
        <div>${note.content}</div>
        <div>${note.dates}</div>
        </div>`;

		return noteElement;
	});

	document
		.querySelector(".active-table .table-header")
		.insertAdjacentHTML("afterend", activeNotesElements.join(""));

	//load archived cards
	const archivedNotesElements = archivedNotes.map(note => {
		const noteElement = `<div class="row">
        <div></div>
        <div>${note.name}</div>
        <div>${note.createdOn}</div>
        <div>${note.category}</div>
        <div>${note.content}</div>
        <div>${note.dates}</div>
        </div>`;

		return noteElement;
	});

	document
		.querySelector(".archived-table .table-header")
		.insertAdjacentHTML("afterend", archivedNotesElements.join(""));

	//load summary
	const summaryElements = summaryNotes.map(note => {
		const summaryElement = `<div class="row">
        <div></div>
        <div>${note.noteCategory}</div>
        <div>${note.createdOn}</div>
        <div>${note.category}</div>
        </div>`;

		return summaryElement;
	});
}

export default loadStartingData;
