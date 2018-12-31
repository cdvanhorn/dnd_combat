import fetch from "cross-fetch";
import {
    ACT_RECEIVE_ACTIONS,
    ACT_REQUEST_ACTIONS
} from "../actionTypes.js";

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