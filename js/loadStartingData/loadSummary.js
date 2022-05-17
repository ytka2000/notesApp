import { summaryNotes } from "../config";

function loadSummary() {
	const summaryElements = summaryNotes.map(note => {
		const category = note.noteCategory.toLowerCase().replace(" ", "");
		const summaryElement = `<div class="row ${category}-summary">
        <div></div>
        <div>${note.noteCategory}</div>
        <div class="active-summary">${note.active}</div>
        <div class="archived-summary">${note.archived}</div>
        </div>`;

		return summaryElement;
	});

	return summaryElements;
}

export default loadSummary;
