import React from "react";
import { connect } from "react-redux";

import {
    updateSelectedPlayerCharacter,
    addSelectedPlayerCharacterProficiency,
    removeSelectedPlayerCharacterProficiency,
    addSelectedPlayerCharacterAction,
    removeSelectedPlayerCharacterAction,
    patchPlayerCharacter,
    postPlayerCharacter,
    deletePlayerCharacter
} from "../redux/actions/playerCharacters.js";

import {fetchClasses} from "../redux/actions/classes.js";
import {fetchRaces} from "../redux/actions/races.js";

import BaseForm from "./Base.js";
import CharacterHeader from "./elements/CharacterHeader.js";
import AttributeGroup from "./elements/AttributeGroup.js";
import CharacterActionList from "./elements/CharacterActionList.js";

const mapStateToProps = state => {
    return {
        "character": state.pcs.ui_selected_character,
        "classes": state.classes.items,
        "races": state.races.items
    };
};

class PlayerCharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (name, event) => {
        let value = undefined;
        if(name === 'actions') {
            value = event;
        } else {
            value = event.target.value;
            if(event.target.type === 'checkbox') {
                value = event.target.checked;
            }
        }
        //keep numbers as numbers
        if(!isNaN(value) && typeof value !== "boolean" && value.length > 0) {
            value = parseInt(value);
        }
        //updating proficiences works differently
        if(name === 'proficiencies') {
            let skill = event.target.id;
            if(value === true) {
                //add proficiency
                this.props.addSelectedPlayerCharacterProficiency(skill);
            } else if(value === false){
                //remove proficiency
                this.props.removeSelectedPlayerCharacterProficiency(skill);
            }
        } else if(name === 'actions') {
            if(value.add === true) {
                this.props.addSelectedPlayerCharacterAction(parseInt(value.id));
            } else {
                this.props.removeSelectedPlayerCharacterAction(parseInt(value.id));
            }
        } else {
            this.props.updateSelectedPlayerCharacter(name, value);
        }
        this.setState({
            dirty: true
        });
    }

    handleSave = (dirtyfields) => {
        if(this.props.character.id) {
            this.props.patchPlayerCharacter(
                'http://localhost:3001/actors',
                this.props.character,
                dirtyfields
            );
            //clear the dirty state for this character
            this.setState({
                dirty: false
            });
        } else {
            //new character
            this.props.postPlayerCharacter('http://localhost:3001/actors', this.props.character);
        }
    }

    handleDelete = () => {
        this.props.deletePlayerCharacter('http://localhost:3001/actors', this.props.character);
    }

    componentDidMount = () => {
        //get the player characters to populate the list
        this.props.fetchClasses('http://localhost:3001/classes');
        this.props.fetchRaces('http://localhost:3001/races');
    }

    render() {
        return (
            <BaseForm
                object={this.props.character}
                handleDelete={this.handleDelete}
                handleChange={this.handleChange}
                handleSave={this.handleSave}
            >
                <h3>Basics</h3>
                <hr />
                <CharacterHeader
                    character={this.props.character}
                    races={this.props.races}
                    classes={this.props.classes}
                    hasinputs={true}
                />
                <br/>
                <h3>Attributes</h3>
                <AttributeGroup
                    character={this.props.character}
                    hasinputs={true}
                />
                <br/>
                <h3>Actions</h3>
                <hr />
                <CharacterActionList
                    character={this.props.character}
                    hasinputs={true}
                />
            </BaseForm>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        updateSelectedPlayerCharacter,
        addSelectedPlayerCharacterProficiency,
        removeSelectedPlayerCharacterProficiency,
        addSelectedPlayerCharacterAction,
        removeSelectedPlayerCharacterAction,
        patchPlayerCharacter,
        postPlayerCharacter,
        deletePlayerCharacter,
        fetchClasses,
        fetchRaces
    }
)(PlayerCharacterForm);
