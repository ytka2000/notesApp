import getModalData from "../modalWindow/getModalData";
import dateNow from "../helpers/dateNow";
import renderActiveTableIcons from "../renderIcons/renderActiveTableIcons";

function createNote() {
	const date = dateNow();
	const icons = renderActiveTableIcons();
	const noteData = getModalData();

	const newNote = `<div class="row">
        <div></div>
        <div class="note-name">${noteData.name}</div>
        <div class="note-created-on">${date}</div>
        <div class="note-category">${noteData.category}</div>
        <div class="note-content">${noteData.content}</div>
        <div>${noteData.dates}</div>
        ${icons}
        </div>`;

	document
		.querySelector(".active-table")
		.lastElementChild.insertAdjacentHTML("beforebegin", newNote);
}

export default createNote;
