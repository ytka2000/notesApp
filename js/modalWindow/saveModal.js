import createNote from "../userActions/createNote";
import editNote from "../userActions/editNote";
import closeModal from "./closeModal";

function saveModal(elementToEdit) {
	try {
		if (elementToEdit) {
			editNote(elementToEdit);
		} else {
			createNote();
		}
		closeModal();
	} catch (error) {
		console.error(new Error("Something went wrong!"));
	}
}

export default saveModal;
