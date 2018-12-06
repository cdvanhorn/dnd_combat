import { combineReducers } from "redux";
import ui from "./ui.js";
import pcs from "./playerCharacters.js";
import classes from "./classes.js";
import races from "./races.js";

export default combineReducers({
    classes,
    pcs,
    races,
    ui
 });