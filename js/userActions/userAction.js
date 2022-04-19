import openModal from "../modalWindow/openModal";
import deleteNote from "./deleteNote";
import archiveNote from "./archiveNote";
import closeModal from "../modalWindow/closeModal";

function userAction(element) {
	const elemClasses = element.classList;

	if (elemClasses.contains("create")) {
		openModal();
	} else if (elemClasses.contains("edit")) {
		openModal(element);
	} else if (elemClasses.contains("delete")) {
		deleteNote(element);
	} else if (elemClasses.contains("archive")) {
		archiveNote(element);
	} else if (elemClasses.contains("modal-cancel")) {
		closeModal();
	}
}

export default userAction;
