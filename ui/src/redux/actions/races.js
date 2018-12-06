import fetch from "cross-fetch";
import {
    RCE_RECEIVE_RACES,
    RCE_REQUEST_RACES
} from "../actionTypes.js";

export const requestRaces = fetching => ({
    type: RCE_REQUEST_RACES,
    payload: {
        "is_fetching": fetching
    }
});

export const receiveRaces = (json) => ({
    type: RCE_RECEIVE_RACES,
    payload: {
        items: json,
        "is_fetching": false
    }
});

export function fetchRaces(url) {
    return (dispatch) => {
        dispatch(requestRaces(true));
        return fetch(url)
            .then( (response) => response.json())
            .then( (json) => dispatch(receiveRaces(json)))
    };
}