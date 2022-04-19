import modalTemplate from "./modalTemplate";
import saveModal from "./saveModal";

function openModal(element) {
	try {
		let data;
		if (element) {
			const note = element.closest(".row");
			const name = note.querySelector(".note-name").innerText;
			const category = note.querySelector(".note-category").innerText;
			const content = note.querySelector(".note-content").innerText;

			data = {
				name: name,
				category: category,
				content: content,
			};
		}

		const modal = modalTemplate(element, data);

		document
			.querySelector(".main-container")
			.insertAdjacentHTML("afterbegin", modal);

		document.querySelector(".modal-save").addEventListener("click", () => {
			saveModal(element);
		});
	} catch (error) {
		console.error(new Error("The delete operation cannot be conducted!"));
	}
}

export default openModal;
