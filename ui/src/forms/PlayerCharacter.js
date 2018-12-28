import React from "react";
import { connect } from "react-redux";

import Button from "react-bootstrap/lib/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";

import {
    updateSelectedPlayerCharacter,
    addSelectedPlayerCharacterProficiency,
    removeSelectedPlayerCharacterProficiency,
    patchPlayerCharacter,
    postPlayerCharacter,
    deletePlayerCharacter
} from "../redux/actions/playerCharacters.js";

import {fetchClasses} from "../redux/actions/classes.js";
import {fetchRaces} from "../redux/actions/races.js";

import CharacterHeader from "./elements/CharacterHeader.js";
import ConfirmDialog from "./elements/ConfirmDialog.js";
import AttributeGroup from "./elements/AttributeGroup.js";

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
        this.state = {
            active: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    handleChange = (name, event) => {
        let value = event.target.value;
        if(event.target.type === 'checkbox') {
            value = event.target.checked;
        }
        //keep numbers as numbers
        if(!isNaN(value) && typeof value !== "boolean" && value.length > 0) {
            value = parseInt(value);
        }
        //updating proficiences works differently
        if(name === 'proficiencies') {
            let skill = event.target.id;
            console.log(value);
            if(value === true) {
                //add proficiency
                this.props.addSelectedPlayerCharacterProficiency(skill);
            } else if(value === false){
                //remove proficiency
                this.props.removeSelectedPlayerCharacterProficiency(skill);
            }
        } else {
            this.props.updateSelectedPlayerCharacter(name, value);
        }

        //update which fields are dirty
        if(this.state[this.props.character.id]) {
            this.setState({
                [this.props.character.id]: Object.assign(this.state[this.props.character.id], {[name]: true})
            })
        } else {
            this.setState({
                [this.props.character.id]: {[name]: true}
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.props.character.id) {
            this.props.patchPlayerCharacter(
                'http://localhost:3001/pcs',
                this.props.character,
                this.state[this.props.character.id]
            );
            //clear the dirty state for this character
            this.setState({
                [this.props.character.id]: {}
            });
        } else {
            //new character
            this.props.postPlayerCharacter('http://localhost:3001/pcs', this.props.character);
        }
    }

    toggleDialog = () => {
        this.setState({
            active: !this.state.active
        });
    }

    handleDelete = () => {
        this.setState({
            active: !this.state.active
        });
        this.props.deletePlayerCharacter('http://localhost:3001/pcs', this.props.character);
    }

    componentDidMount = () => {
        //get the player characters to populate the list
        this.props.fetchClasses('http://localhost:3001/classes');
        this.props.fetchRaces('http://localhost:3001/races');
    }

    render() {
        //is something dirty if so activate save button
        let disabled = true;
        if(this.state[this.props.character.id]) {
            disabled = !Object.keys(this.state[this.props.character.id]).length > 0;
        }

        if(!this.props.character.hasOwnProperty('name')) {
            return (<p>Select a Character</p>);
        }

        let action_text = "delete " + this.props.character.name;
        return (
            <React.Fragment>
                <ConfirmDialog
                    actionText={action_text}
                    onYes={this.handleDelete}
                    toggleDialog={this.toggleDialog}
                    active={this.state.active}
                />
                <form onSubmit={this.handleSubmit}>
                    <CharacterHeader
                        character={this.props.character}
                        handleChange={this.handleChange}
                        races={this.props.races}
                        classes={this.props.classes}
                    />
                    <AttributeGroup
                        character={this.props.character}
                        handleChange={this.handleChange}
                    />
                    <br />
                    <ButtonToolbar className="justify-content-end">
                        <Button type='submit' variant='primary' disabled={disabled}>Save</Button>
                        <Button variant='danger' onClick={this.toggleDialog}>Delete</Button>
                    </ButtonToolbar>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        updateSelectedPlayerCharacter,
        addSelectedPlayerCharacterProficiency,
        removeSelectedPlayerCharacterProficiency,
        patchPlayerCharacter,
        postPlayerCharacter,
        deletePlayerCharacter,
        fetchClasses,
        fetchRaces
    }
)(PlayerCharacterForm);