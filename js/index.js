import loadStartingData from "./loadStartingData/loadStartingData";
import userAction from "./userActions/userAction";

loadStartingData();

document.addEventListener("click", event => userAction(event.target));
