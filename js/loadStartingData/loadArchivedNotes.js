import { archivedNotes } from "../config";
import renderArchivedTableIcons from "../renderIcons/renderArchivedTableIcons";

function loadArchivedNotes() {
	const icons = renderArchivedTableIcons();

	const archivedNotesElements = archivedNotes.map(note => {
		const noteElement = `<div class="row">
        <div></div>
        <div>${note.name}</div>
        <div>${note.createdOn}</div>
        <div>${note.category}</div>
        <div>${note.content}</div>
        <div>${note.dates}</div>
        ${icons}
        </div>`;

		return noteElement;
	});

	return archivedNotesElements;
}

export default loadArchivedNotes;
