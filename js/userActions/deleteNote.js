function deleteNote(element) {
	try {
		var noteToDelete = element.closest(".row");
		noteToDelete.remove();
	} catch (error) {
		console.error(new Error("The delete operation cannot be conducted!"));
	}
}

export default deleteNote;
