function getRowCategory(row) {
	const noteCategory = row.querySelector(".note-category").innerText;
	return noteCategory.toLowerCase().replace(" ", "");
}

export default getRowCategory;
