import renderActiveTableIcons from "../renderIcons/renderActiveTableIcons";
import updateSummary from "./updateSummary";

function unarchiveNote(element) {
	try {
		const noteToUnarchive = element.closest(".row");

		noteToUnarchive.lastElementChild.remove();
		const activeIcons = renderActiveTableIcons();
		noteToUnarchive.insertAdjacentHTML("beforeend", activeIcons);

		document
			.querySelector(".active-table")
			.lastElementChild.before(noteToUnarchive);

		updateSummary(noteToUnarchive, "active");
	} catch (error) {
		console.error(new Error("The unarchive operation cannot be conducted!"));
	}
}

export default unarchiveNote;
