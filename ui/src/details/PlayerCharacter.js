import React from "react";
import { connect } from "react-redux";

import {PlayerCharacterForm} from "../forms/PlayerCharacter.js";

import { CREATE_PLAYER_CHARACTER_ID } from "../redux/actions/playerCharacters.js";
import {fetchClasses} from "../redux/actions/classes.js";
import {fetchRaces} from "../redux/actions/races.js";
import {PlayerCharacter} from "../models/PlayerCharacter.js";

const mapStateToProps = state => {
    return {
        "characters": state.pcs.items,
        "classes": state.classes.items,
        "races": state.races.items
    };
};

class PlayerCharacterDetails extends React.Component {
    componentDidMount = () => {
        //get the player characters to populate the list
        this.props.fetchClasses('http://localhost:3001/classes');
        this.props.fetchRaces('http://localhost:3001/races');
    }

    componentWillUnmount = () => {
        //clear character list?
        console.log("player character details unmount");
    }

    render() {
        //try and find the character
        let character = new PlayerCharacter();
        if(this.props.selectedPlayerCharacterId && this.props.selectedPlayerCharacterId !== CREATE_PLAYER_CHARACTER_ID) {
            let character_json = this.props.characters.find((char) => char.id === this.props.selectedPlayerCharacterId);
            character.fromJson(character_json);
        }

        let content;
        if(character.id || this.props.selectedPlayerCharacterId == CREATE_PLAYER_CHARACTER_ID) {
            content = <PlayerCharacterForm character={character} />;
        } else {
            content = <p>Select a Player Character</p>;
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchClasses,
        fetchRaces
    }
)(PlayerCharacterDetails);