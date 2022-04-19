function closeModal() {
	try {
		document.querySelector(".modal-block").remove();
	} catch (error) {
		console.error(new Error("Something went wrong!"));
	}
}

export default closeModal;
