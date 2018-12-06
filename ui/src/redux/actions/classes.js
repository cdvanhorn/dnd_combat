import fetch from "cross-fetch";
import {
    CLS_RECEIVE_CLASSES,
    CLS_REQUEST_CLASSES
} from "../actionTypes.js";

export const requestClasses = fetching => ({
    type: CLS_REQUEST_CLASSES,
    payload: {
        "is_fetching": fetching
    }
});

export const receiveClasses = (json) => ({
    type: CLS_RECEIVE_CLASSES,
    payload: {
        items: json,
        "is_fetching": false
    }
});

export function fetchClasses(url) {
    return (dispatch) => {
        dispatch(requestClasses(true));
        return fetch(url)
            .then( (response) => response.json())
            .then( (json) => dispatch(receiveClasses(json)))
    };
}
