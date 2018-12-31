import { combineReducers } from "redux";
import ui from "./ui.js";
import pcs from "./playerCharacters.js";
import classes from "./classes.js";
import races from "./races.js";
import actions from "./actions.js";

export default combineReducers({
    actions,
    classes,
    pcs,
    races,
    ui
 });