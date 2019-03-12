import { 
    EFF_RECEIVE_EFFECTS,
    EFF_REQUEST_EFFECTS,
    EFF_SELECT_EFFECT
} from "../actionTypes.js";

const initialState = {
    ui_is_fetching: false,
    items: [],
    ui_selected_effect: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case EFF_REQUEST_EFFECTS:
            let payload = action.payload;
            return {
                ...state,
                ui_is_fetching: payload.is_fetching
            };
        case EFF_RECEIVE_EFFECTS:
            payload = action.payload;
            return {
                ...state,
                ui_is_fetching: payload.is_fetching,
                items: payload.items
            }
        case EFF_SELECT_EFFECT:
            payload = action.payload;
            return {
                ...state,
                ui_selected_effect: payload.effect
            }
        default:
            return state;
    }
};
