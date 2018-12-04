import { PCS_REQUEST_PLAYER_CHARACTERS } from "../actionTypes.js";

const initialState = {
    items: [],
    is_fetching: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case PCS_REQUEST_PLAYER_CHARACTERS:
            let payload = action.payload;
            return { 
                ...state,
                is_fetching: payload.is_fetching
            };
        default:
            return state;
    }
};