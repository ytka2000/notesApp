import getModalData from "../modalWindow/getModalData";
import dateNow from "../helpers/dateNow";
import renderActiveTableIcons from "../renderIcons/renderActiveTableIcons";
import updateSummary from "./updateSummary";

function createNote() {
	try {
		const date = dateNow();
		const icons = renderActiveTableIcons();
		const noteData = getModalData();

		const newNote = `<div class="row">
        <div></div>
        <div class="note-name">${noteData.name}</div>
        <div class="note-created-on">${date}</div>
        <div class="note-category">${noteData.category}</div>
        <div class="note-content">${noteData.content}</div>
        <div class="note-dates">${noteData.dates}</div>
        ${icons}
        </div>`;

		const activeTableLastElem =
			document.querySelector(".active-table").lastElementChild;
		activeTableLastElem.insertAdjacentHTML("beforebegin", newNote);

		const newNoteElem = activeTableLastElem.previousElementSibling;
		updateSummary(newNoteElem, "create");
	} catch (e) {
		console.error(e);
	}
}

export default createNote;
