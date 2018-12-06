import React from "react";
import { connect } from "react-redux";

import {Avatar} from "react-toolbox/lib/avatar";
import {Input} from "react-toolbox/lib/input";
import {Dropdown} from "react-toolbox/lib/dropdown";

import { CREATE_PLAYER_CHARACTER_ID } from "../redux/actions/playerCharacters.js";
import {fetchClasses} from "../redux/actions/classes.js";

const mapStateToProps = state => {
    return { 
        "selected_pc_id": state.pcs.ui_selected_pc_id,
        "classes": state.classes.items
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
    }

    componentWillUnmount = () => {
        //clear character list?
        console.log("character search unmount");
    }

    render() {
        let content = <p>Select a Player Character</p>;
        if(this.props.selected_pc_id == CREATE_PLAYER_CHARACTER_ID) {
            content = CharacterForm({
                character: {id: 1, name: "Steve Stephen Stevenson", race_id: 1, class_id: 1},
                races: [{id: 1, name: "Human"}],
                classes: this.props.classes
            });
        } else {
            //check for valid pc id, display details
            console.log("hola");
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
        fetchClasses
    }
)(PlayerCharacterDetails);