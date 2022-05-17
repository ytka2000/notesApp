import { archivedNotes } from "../config";
import renderArchivedTableIcons from "../renderIcons/renderArchivedTableIcons";

function loadArchivedNotes() {
	const icons = renderArchivedTableIcons();

	const archivedNotesElements = archivedNotes.map(note => {
		const noteElement = `<div class="row">
        <div></div>
        <div class="note-name">${note.name}</div>
        <div class="note-created-on">${note.createdOn}</div>
        <div class="note-category">${note.category}</div>
        <div class="note-content">${note.content}</div>
        <div class="note-dates">${note.dates}</div>
        ${icons}
        </div>`;

		return noteElement;
	});

	return archivedNotesElements;
}

export default loadArchivedNotes;
