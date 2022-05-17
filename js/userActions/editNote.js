import getModalData from "../modalWindow/getModalData";

function editNote(element) {
	try {
		const noteToEdit = element.closest(".row");
		const noteData = getModalData();

		noteToEdit.querySelector(".note-name").innerText = noteData.name;
		noteToEdit.querySelector(".note-category").innerText = noteData.category;
		noteToEdit.querySelector(".note-content").innerText = noteData.content;
		noteToEdit.querySelector(".note-dates").innerText = noteData.dates;
	} catch (error) {
		console.error(new Error("The edit operation cannot be conducted!"));
	}
}

export default editNote;
