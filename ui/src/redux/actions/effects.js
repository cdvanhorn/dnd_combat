import fetch from "cross-fetch";
import {
    EFF_RECEIVE_EFFECTS,
    EFF_SELECT_EFFECT,
    EFF_REQUEST_EFFECTS
} from "../actionTypes.js";

export const selectEffect = effect => ({
    type: EFF_SELECT_EFFECT,
    payload: {
        "effect": effect
    }
});

export const requestEffects = fetching => ({
    type: EFF_REQUEST_EFFECTS,
    payload: {
        "is_fetching": fetching
    }
});

export const receiveEffects = (json) => ({
    type: EFF_RECEIVE_EFFECTS,
    payload: {
        items: json,
        "is_fetching": false
    }
});

export function fetchEffects(url) {
    return (dispatch) => {
        dispatch(requestEffects(true));
        return fetch(url)
            .then( (response) => response.json())
            .then( (json) => dispatch(receiveEffects(json)))
    };
}
