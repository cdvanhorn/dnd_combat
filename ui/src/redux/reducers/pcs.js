import { 
    PCS_REQUEST_PLAYER_CHARACTERS,
    PCS_RECEIVE_PLAYER_CHARACTERS,
    PCS_UI_PLAYER_CHARACTER_SEARCH,
    PCS_UI_PLAYER_CHARACTER_SELECT
} from "../actionTypes.js";

const initialState = {
    ui_player_character_search: '',
    ui_selected_pc_id: null,
    ui_is_fetching: false,
    items: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case PCS_UI_PLAYER_CHARACTER_SEARCH:
            let payload = action.payload;
            return { 
                ...state,
                ui_player_character_search: payload.filter
            };
        case PCS_UI_PLAYER_CHARACTER_SELECT:
            payload = action.payload;
            return {
                ...state,
                ui_selected_pc_id: payload.selected_id
            };
        case PCS_REQUEST_PLAYER_CHARACTERS:
            payload = action.payload;
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
        default:
            return state;
    }
};