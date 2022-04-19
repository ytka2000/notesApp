import * as editButton from "../../images/pen-to-square-regular.svg";
import * as achiveButton from "../../images/folder-regular.svg";
import * as deleteButton from "../../images/trash-can-regular.svg";

function renderActiveTableIcons() {
	const icons = `<div class="icons-block">
        <img src=${editButton} alt="edit-button" class="icon edit">
        <img src=${achiveButton} alt="archive-button" class="icon archive">
        <img src=${deleteButton} alt="delete-button" class="icon delete">
    </div>`;

	return icons;
}

export default renderActiveTableIcons;
