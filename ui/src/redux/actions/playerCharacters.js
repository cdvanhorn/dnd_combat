import fetch from "cross-fetch";
import {
    PCS_REQUEST_PLAYER_CHARACTERS,
    PCS_RECEIVE_PLAYER_CHARACTERS,
    PCS_SELECT_PLAYER_CHARACTER,
    PCS_UPDATE_SELECTED_PLAYER_CHARACTER
} from "../actionTypes.js";

export const updateSelectedPlayerCharacter = (field, value) => ({
    type: PCS_UPDATE_SELECTED_PLAYER_CHARACTER,
    payload: {
        "field": field,
        "value": value
    }
});

export const selectPlayerCharacter = character => ({
    type: PCS_SELECT_PLAYER_CHARACTER,
    payload: {
        "character": character
    }
});

export const requestPlayerCharacters = fetching => ({
    type: PCS_REQUEST_PLAYER_CHARACTERS,
    payload: {
        "is_fetching": fetching
    }
});

export const receivePlayerCharacters = (json) => ({
    type: PCS_RECEIVE_PLAYER_CHARACTERS,
    payload: {
        items: json,
        "is_fetching": false
    }
});

export function fetchPlayerCharacters(url) {
    return (dispatch) => {
        dispatch(requestPlayerCharacters(true));
        return fetch(url)
            .then( (response) => response.json())
            .then( (json) => dispatch(receivePlayerCharacters(json)))
    };
}
