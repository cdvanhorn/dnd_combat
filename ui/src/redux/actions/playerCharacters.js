import fetch from "cross-fetch";
import pick from "lodash/pick";

import {
    PCS_REQUEST_PLAYER_CHARACTERS,
    PCS_RECEIVE_PLAYER_CHARACTERS,
    PCS_SELECT_PLAYER_CHARACTER,
    PCS_UPDATE_SELECTED_PLAYER_CHARACTER,
    PCS_SAVE_PLAYER_CHARACTER,
    PCS_SAVED_PLAYER_CHARACTER,
    PCS_REMOVE_PLAYER_CHARACTER,
    PCS_REMOVED_PLAYER_CHARACTER,
    PCS_UPDATE_SELECTED_PLAYER_CHARACTER_ADD_PROFICIENCY,
    PCS_UPDATE_SELECTED_PLAYER_CHARACTER_REMOVE_PROFICIENCY,
    PCS_UPDATE_SELECTED_PLAYER_CHARACTER_ADD_ACTION,
    PCS_UPDATE_SELECTED_PLAYER_CHARACTER_REMOVE_ACTION
} from "../actionTypes.js";
import {Actor} from "../../models/Actor.js";

export const savePlayerCharacter = () => ({
    type: PCS_SAVE_PLAYER_CHARACTER,
    payload: {
        "is_saving": true
    }
});

export const savedPlayerCharacter = (character) => ({
    type: PCS_SAVED_PLAYER_CHARACTER,
    payload: {
        "is_saving": false,
        "character": character
    }
});

export const removePlayerCharacter = () => ({
    type: PCS_REMOVE_PLAYER_CHARACTER,
    payload: {
        "is_removing": true
    }
});

export const removedPlayerCharacter = (character) => ({
    type: PCS_REMOVED_PLAYER_CHARACTER,
    payload: {
        "is_removing": false,
        "character": character
    }
});

export function deletePlayerCharacter(url, character) {
    return (dispatch) => {
        dispatch(removePlayerCharacter());
        return fetch(url + '/' + character.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then( (response) => response.json())
        .then( (json) => {
            let cobj = new Actor();
            dispatch(removedPlayerCharacter(cobj));
            dispatch(fetchPlayerCharacters(url));
        })
    };
}

export function patchPlayerCharacter(url, character, fields) {
    return (dispatch) => {
        //figure out content to send
        let content = pick(character, Object.keys(fields));
        dispatch(savePlayerCharacter());
        return fetch(url + '/' + character.id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        }).then( (response) => response.json())
        .then( (json) => {
            let cobj = new Actor();
            cobj.fromJson(json);
            dispatch(savedPlayerCharacter(cobj));
            dispatch(fetchPlayerCharacters(url));
        })
    };
}

export function postPlayerCharacter(url, character) {
    return (dispatch) => {
        dispatch(savePlayerCharacter());
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        }).then( (response) => response.json())
        .then( (json) => {
            let cobj = new Actor();
            cobj.fromJson(json);
            dispatch(savedPlayerCharacter(cobj));
            dispatch(fetchPlayerCharacters(url));
        })
    };
}

export const updateSelectedPlayerCharacter = (field, value) => ({
    type: PCS_UPDATE_SELECTED_PLAYER_CHARACTER,
    payload: {
        "field": field,
        "value": value
    }
});

export const addSelectedPlayerCharacterProficiency = (skill) => ({
    type: PCS_UPDATE_SELECTED_PLAYER_CHARACTER_ADD_PROFICIENCY,
    payload: {
        "proficiency": skill
    }
});

export const removeSelectedPlayerCharacterProficiency = (skill) => ({
    type: PCS_UPDATE_SELECTED_PLAYER_CHARACTER_REMOVE_PROFICIENCY,
    payload: {
        "proficiency": skill
    }
});

export const addSelectedPlayerCharacterAction = (action) => ({
    type: PCS_UPDATE_SELECTED_PLAYER_CHARACTER_ADD_ACTION,
    payload: {
        action: action
    }
});

export const removeSelectedPlayerCharacterAction = (action) => ({
    type: PCS_UPDATE_SELECTED_PLAYER_CHARACTER_REMOVE_ACTION,
    payload: {
        action: action
    }
});

export const selectPlayerCharacter = character => ({
    type: PCS_SELECT_PLAYER_CHARACTER,
    payload: {
        "character": character
    }
});

export const requestPlayerCharacters = () => ({
    type: PCS_REQUEST_PLAYER_CHARACTERS,
    payload: {
        "is_fetching": true
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
        dispatch(requestPlayerCharacters());
        return fetch(url)
            .then( (response) => response.json())
            .then( (json) => dispatch(receivePlayerCharacters(json)))
    };
}
