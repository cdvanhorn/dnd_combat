import { combineReducers } from "redux";
import ui from "./ui.js";
import pcs from "./playerCharacters.js";
import classes from "./classes.js";

export default combineReducers({
    ui,
    classes,
    pcs
 });