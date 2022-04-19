function archiveNote(element) {
	try {
		const noteToArchive = element.closest(".row");
		const rowCopy = noteToArchive.cloneNode(true);
	} catch (error) {
		console.error(new Error("The archive operation cannot be conducted!"));
	}
}

export default archiveNote;
