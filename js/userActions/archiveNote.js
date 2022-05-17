import renderArchivedTableIcons from "../renderIcons/renderArchivedTableIcons";
import updateSummary from "./updateSummary";
import getRowCategory from "../helpers/getRowCategory";

function archiveNote(element) {
	try {
		const noteToArchive = element.closest(".row");

		noteToArchive.lastElementChild.remove();
		const archiveIcons = renderArchivedTableIcons();
		noteToArchive.insertAdjacentHTML("beforeend", archiveIcons);

		document.querySelector(".archived-table").appendChild(noteToArchive);

		updateSummary(noteToArchive, "archive");
	} catch (error) {
		console.error(new Error("The archive operation cannot be conducted!"));
	}
}

export default archiveNote;
