import { categories } from "../config";

function modalTemplate(element, data) {
	let name, category, content;
	if (data) {
		({ name, category, content } = data);
	}
	const modal = `<div class="modal-block">
            <div class="modal">
                <form>
                    <div class="modal-input note-name-block">
                        <label for="note-name">Name</label>
                        <input type="text" id="note-name" value=${
													name ? name : ""
												}>
                    </div>
                    <div class="modal-input note-category-block">
                        <label for="note-category">Category</label>
                        <select id="note-category">
                        ${categories.map(categ => {
													const selected =
														category === categ ? "selected" : null;
													return `<option value=${categ} ${selected}=>${categ}</option>`;
												})}
                        </select>
                    </div>
                    <div class="modal-input note-content-block">
                        <label for="note-content">Content</label>
                        <textarea type="text" id="note-content" rows="5">${
													content ? content : ""
												}</textarea>
                    </div>
                    <div class="modal-buttons-block">
                        <button type="button" class="modal-save">Save</button>
                        <button type="button" class="modal-cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>`;

	return modal;
}

export default modalTemplate;
