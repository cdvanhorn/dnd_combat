import fetch from "cross-fetch";
import {
    ACT_RECEIVE_ACTIONS,
    ACT_REQUEST_ACTIONS,
    ACT_SELECT_ACTION,
    ACT_UPDATE_SELECTED_ACTION
} from "../actionTypes.js";

export const updateSelectedAction = (field, value) => ({
    type: ACT_UPDATE_SELECTED_ACTION,
    payload: {
        "field": field,
        "value": value
    }
});

export const selectAction = action => ({
    type: ACT_SELECT_ACTION,
    payload: {
        "action": action
    }
});

export const requestActions = fetching => ({
    type: ACT_REQUEST_ACTIONS,
    payload: {
        "is_fetching": fetching
    }
});

export const receiveActions = (json) => ({
    type: ACT_RECEIVE_ACTIONS,
    payload: {
        items: json,
        "is_fetching": false
    }
});

export function fetchActions(url) {
    return (dispatch) => {
        dispatch(requestActions(true));
        return fetch(url)
            .then( (response) => response.json())
            .then( (json) => dispatch(receiveActions(json)))
    };
}
