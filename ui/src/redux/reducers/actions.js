import { 
    ACT_RECEIVE_ACTIONS,
    ACT_REQUEST_ACTIONS,
    ACT_SELECT_ACTION
} from "../actionTypes.js";

const initialState = {
    ui_is_fetching: false,
    items: [],
    ui_selected_action: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ACT_REQUEST_ACTIONS:
            let payload = action.payload;
            return { 
                ...state,
                ui_is_fetching: payload.is_fetching
            };
        case ACT_RECEIVE_ACTIONS:
            payload = action.payload;
            return {
                ...state,
                ui_is_fetching: payload.is_fetching,
                items: payload.items
            };
        case ACT_SELECT_ACTION:
            payload = action.payload;
            return {
                ...state,
                ui_selected_action: payload.action
            };
        default:
            return state;
    }
};
