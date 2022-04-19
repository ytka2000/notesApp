import * as achiveButton from "../../images/folder-open-regular.svg";
import * as deleteButton from "../../images/trash-can-regular.svg";

function renderArchivedTableIcons() {
	const icons = `<div class="icons-block">
        <img src=${achiveButton} alt="unarchive-button" class="icon unarchive">
        <img src=${deleteButton} alt="delete-button" class="icon delete">
    </div>`;

	return icons;
}

export default renderArchivedTableIcons;
