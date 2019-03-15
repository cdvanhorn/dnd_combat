import { 
    ACT_RECEIVE_ACTIONS,
    ACT_REQUEST_ACTIONS,
    ACT_SELECT_ACTION,
    ACT_UPDATE_SELECTED_ACTION,
    ACT_UPDATE_SELECTED_ACTION_ADD_EFFECT,
    ACT_UPDATE_SELECTED_ACTION_REMOVE_EFFECT
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
        case ACT_UPDATE_SELECTED_ACTION:
            payload = action.payload;
            return {
                ...state,
                ui_selected_action: Object.assign(state.ui_selected_action, {[payload.field]: payload.value})
            };
        case ACT_UPDATE_SELECTED_ACTION_ADD_EFFECT:
            payload= action.payload;
            return {
                ...state,
                ui_selected_action: Object.assign(
                    state.ui_selected_action,
                    {
                        [payload.field]: [...state.ui_selected_action[payload.field], payload.effect]
                    }
                )
            };
        case ACT_UPDATE_SELECTED_ACTION_REMOVE_EFFECT:
            payload = action.payload;
            return {
                ...state,
                ui_selected_action: Object.assign(
                    state.ui_selected_action,
                    {
                        [payload.field]: state.ui_selected_action[payload.field].filter( (effect) => {
                            return effect !== payload.effect
                        })
                    }
                )
            };
        default:
            return state;
    }
};
