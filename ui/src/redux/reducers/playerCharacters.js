import { 
    PCS_REQUEST_PLAYER_CHARACTERS,
    PCS_RECEIVE_PLAYER_CHARACTERS,
    PCS_SELECT_PLAYER_CHARACTER,
    PCS_UPDATE_SELECTED_PLAYER_CHARACTER,
    PCS_SAVE_PLAYER_CHARACTER,
    PCS_SAVED_PLAYER_CHARACTER,
    PCS_REMOVE_PLAYER_CHARACTER,
    PCS_REMOVED_PLAYER_CHARACTER
} from "../actionTypes.js";

const initialState = {
    ui_is_fetching: false,
    ui_is_saving: false,
    ui_is_removing: false,
    items: [],
    ui_selected_character: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case PCS_REQUEST_PLAYER_CHARACTERS:
            let payload = action.payload;
            return { 
                ...state,
                ui_is_fetching: payload.is_fetching
            };
        case PCS_RECEIVE_PLAYER_CHARACTERS:
            payload = action.payload;
            return {
                ...state,
                ui_is_fetching: payload.is_fetching,
                items: payload.items
            };
        case PCS_SELECT_PLAYER_CHARACTER:
            payload = action.payload;
            return {
                ...state,
                ui_selected_character: payload.character
            };
        case PCS_UPDATE_SELECTED_PLAYER_CHARACTER:
            payload = action.payload;
            return {
                ...state,
                ui_selected_character: Object.assign(state.ui_selected_character, {[payload.field]: payload.value})
            };
        case PCS_SAVE_PLAYER_CHARACTER:
            payload = action.payload;
            return {
                ...state,
                ui_is_saving: payload.is_saving
            }
        case PCS_SAVED_PLAYER_CHARACTER:
            payload = action.payload;
            return {
                ...state,
                ui_is_saving: payload.is_saving,
                ui_selected_character: payload.character
            }
        case PCS_REMOVE_PLAYER_CHARACTER:
            payload = action.payload;
            return {
                ...state,
                ui_is_removing: payload.is_removing
            }
        case PCS_REMOVED_PLAYER_CHARACTER:
            payload = action.payload;
            return {
                ...state,
                ui_is_removing: payload.is_removing,
                ui_selected_character: payload.character
            }
        default:
            return state;
    }
};