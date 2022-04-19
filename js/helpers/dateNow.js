function dateNow() {
	const now = new Date();
	return now.toLocaleDateString("en-US");
}

export default dateNow;
