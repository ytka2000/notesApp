import { activeNotes } from "../config";
import renderActiveTableIcons from "../renderIcons/renderActiveTableIcons";

function loadActiveNotes() {
	const icons = renderActiveTableIcons();

	const activeNotesElements = activeNotes.map(note => {
		const noteElement = `<div class="row">
        <div></div>
        <div class="note-name">${note.name}</div>
        <div class="note-created-on">${note.createdOn}</div>
        <div class="note-category">${note.category}</div>
        <div class="note-content">${note.content}</div>
        <div>${note.dates}</div>
        ${icons}
        </div>`;

		return noteElement;
	});

	return activeNotesElements;
}

export default loadActiveNotes;
