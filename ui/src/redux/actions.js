import { UI_PLAYER_CHARACTER_SEARCH } from "./actionTypes";

export const setPlayerCharacterSearch = filter => ({
    type: UI_PLAYER_CHARACTER_SEARCH,
    payload: { filter }
});
