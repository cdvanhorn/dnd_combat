import { 
    PCS_REQUEST_PLAYER_CHARACTERS,
    PCS_RECEIVE_PLAYER_CHARACTERS,
    PCS_SELECT_PLAYER_CHARACTER
} from "../actionTypes.js";

const initialState = {
    ui_is_fetching: false,
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
        default:
            return state;
    }
};