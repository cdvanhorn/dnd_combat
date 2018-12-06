import fetch from "cross-fetch";
import {
    PCS_REQUEST_PLAYER_CHARACTERS,
    PCS_RECEIVE_PLAYER_CHARACTERS,
    PCS_UI_PLAYER_CHARACTER_SEARCH,
    PCS_UI_PLAYER_CHARACTER_SELECT
} from "../actionTypes.js";

export const CREATE_PLAYER_CHARACTER_ID = "create";

export const setPlayerCharacterSearch = filter => ({
    type: PCS_UI_PLAYER_CHARACTER_SEARCH,
    payload: { filter }
});

export const selectPlayerCharacter = pcid => ({
    type: PCS_UI_PLAYER_CHARACTER_SELECT,
    payload: { selected_id: pcid }
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
