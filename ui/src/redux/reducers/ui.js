import { UI_PLAYER_CHARACTER_SEARCH } from "../actionTypes.js";

const initialState = {
    player_character_search: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case UI_PLAYER_CHARACTER_SEARCH:
            const payload = action.payload;
            return { 
                ...state,
                player_character_search: payload.filter
            };
        default:
            return state;
    }
};