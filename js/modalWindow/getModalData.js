import getDatesFromText from "../helpers/getDatesFromText";

function getModalData() {
	const data = {};

	const modal = document.querySelector(".modal-block");

	data.name = modal.querySelector("#note-name").value || "";
	data.category = modal.querySelector("#note-category").value || "";
	data.content = modal.querySelector("#note-content").value || "";
	data.dates = getDatesFromText(data.content);

	return data;
}

export default getModalData;
