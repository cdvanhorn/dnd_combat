import React from "react";
import { connect } from "react-redux";

import {Avatar} from "react-toolbox/lib/avatar";
import {Input} from "react-toolbox/lib/input";
import {Dropdown} from "react-toolbox/lib/dropdown";

import { CREATE_PLAYER_CHARACTER_ID } from "../redux/actions/playerCharacters.js";
import {fetchClasses} from "../redux/actions/classes.js";
import {fetchRaces} from "../redux/actions/races.js";

const mapStateToProps = state => {
    return { 
        "selected_pc_id": state.pcs.ui_selected_pc_id,
        "characters": state.pcs.items,
        "classes": state.classes.items,
        "races": state.races.items
    };
};

function CharacterForm(props) {
    return (
        <div>
            <Avatar title={props.character.name} />
            <Input type='text' label='Character Name' name='name' value={props.character.name}/>
            <Dropdown
                label="Race"
                auto
                source={props.races}
                value={props.character.race_id}
                labelKey={"name"}
                valueKey={"id"}
            />
            <Dropdown
                label="Class"
                auto
                source={props.classes}
                value={props.character.class_id}
                labelKey={"name"}
                valueKey={"id"}
            />
        </div>
    )
}

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
        let content = <p>Select a Player Character</p>;
        if(this.props.selected_pc_id == CREATE_PLAYER_CHARACTER_ID) {
            content = CharacterForm({
                character: {},
                races: this.props.races,
                classes: this.props.classes
            });
        } else if(this.props.selected_pc_id){
            content = CharacterForm({
                character: this.props.characters.find((char) => char.id === this.props.selected_pc_id),
                races: this.props.races,
                classes: this.props.classes
            });
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