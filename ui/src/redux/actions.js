import { UI_PLAYER_CHARACTER_SEARCH, UI_PLAYER_CHARACTER_SELECT } from "./actionTypes";

export const setPlayerCharacterSearch = filter => ({
    type: UI_PLAYER_CHARACTER_SEARCH,
    payload: { filter }
});

export const selectPlayerCharacter = pcid => ({
    type: UI_PLAYER_CHARACTER_SELECT,
    payload: { selected_id: pcid }
});
