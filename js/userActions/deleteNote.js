import updateSummary from "./updateSummary";

function deleteNote(element) {
	try {
		const noteToDelete = element.closest(".row");

		const table = noteToDelete.closest(".table");
		if (table.classList.contains("active-table")) {
			updateSummary(noteToDelete, "delete active");
		} else if (table.classList.contains("archived-table")) {
			updateSummary(noteToDelete, "delete archive");
		}

		noteToDelete.remove();
	} catch (error) {
		console.log(error);
		console.error(new Error("The delete operation cannot be conducted!"));
	}
}

export default deleteNote;
