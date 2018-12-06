import { 
    RCE_RECEIVE_RACES,
    RCE_REQUEST_RACES
} from "../actionTypes.js";

const initialState = {
    ui_is_fetching: false,
    items: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case RCE_REQUEST_RACES:
            let payload = action.payload;
            return { 
                ...state,
                ui_is_fetching: payload.is_fetching
            };
        case RCE_RECEIVE_RACES:
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