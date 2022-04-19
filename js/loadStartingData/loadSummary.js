import { summaryNotes } from "../config";

function loadSummary() {
	const summaryElements = summaryNotes.map(note => {
		const summaryElement = `<div class="row">
        <div></div>
        <div>${note.noteCategory}</div>
        <div>${note.active}</div>
        <div>${note.archived}</div>
        </div>`;

		return summaryElement;
	});

	return summaryElements;
}

export default loadSummary;
