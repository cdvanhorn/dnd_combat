import { 
    CLS_REQUEST_CLASSES,
    CLS_RECEIVE_CLASSES
} from "../actionTypes.js";

const initialState = {
    ui_is_fetching: false,
    items: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case CLS_REQUEST_CLASSES:
            let payload = action.payload;
            return { 
                ...state,
                ui_is_fetching: payload.is_fetching
            };
        case CLS_RECEIVE_CLASSES:
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