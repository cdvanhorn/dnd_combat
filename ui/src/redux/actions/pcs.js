import { PCS_REQUEST_PLAYER_CHARACTERS } from "../actionTypes.js";

export const requestPlayerCharacters = fetching => ({
    type: PCS_REQUEST_PLAYER_CHARACTERS,
    payload: {
        "is_fetching": fetching
    }
});

export function fetchPlayerCharacters(url) {
    console.log(url);
    return requestPlayerCharacters(true);
}
