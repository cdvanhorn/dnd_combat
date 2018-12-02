import { UI_PLAYER_CHARACTER_SEARCH, UI_PLAYER_CHARACTER_SELECT } from "../actionTypes.js";

const initialState = {
    player_character_search: '',
    selected_pc_id: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case UI_PLAYER_CHARACTER_SEARCH:
            let payload = action.payload;
            return { 
                ...state,
                player_character_search: payload.filter
            };
        case UI_PLAYER_CHARACTER_SELECT:
            payload = action.payload;
            return {
                ...state,
                selected_pc_id: payload.selected_id
            };
        default:
            return state;
    }
};