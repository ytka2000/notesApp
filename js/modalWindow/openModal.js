import modalTemplate from "./modalTemplate";
import saveModal from "./saveModal";

function openModal(element) {
	try {
		let data;
		if (element) {
			const note = element.closest(".row");
			const noteName = note.querySelector(".note-name").innerText;
			const category = note.querySelector(".note-category").innerText;
			const content = note.querySelector(".note-content").innerText;

			data = {
				name: noteName,
				category: category,
				content: content,
			};
		}

		const modal = modalTemplate(data);

		document
			.querySelector(".main-container")
			.insertAdjacentHTML("afterbegin", modal);

		document.querySelector(".modal-save").addEventListener("click", () => {
			saveModal(element);
		});
	} catch (error) {
		console.error(new Error("The operation cannot be conducted!"));
	}
}

export default openModal;
