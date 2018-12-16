import React from "react";
import { connect } from "react-redux";

import {Button} from "react-toolbox/lib/button";
import {Dialog} from "react-toolbox/lib/dialog";

import {
    updateSelectedPlayerCharacter,
    patchPlayerCharacter,
    postPlayerCharacter,
    deletePlayerCharacter
} from "../redux/actions/playerCharacters.js";

import {fetchClasses} from "../redux/actions/classes.js";
import {fetchRaces} from "../redux/actions/races.js";

import CharacterHeader from "./elements/CharacterHeader.js";

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

    handleChange = (name, value) => {
        this.props.updateSelectedPlayerCharacter(name, value);

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

        let actions = [
            { label: "Cancel", onClick: this.toggleDialog },
            { label: "Yes", onClick: this.handleDelete }
        ];

        return (
            <React.Fragment>
                <Dialog
                    actions={actions}
                    active={this.state.active}
                    onEscKeyDown={this.toggleDialog}
                    onOverlayClick={this.toggleDialog}
                    title='Confirmation'
                >
                    <p>Are you sure you want to delete {this.props.character.name}?</p>
                </Dialog>
                <form onSubmit={this.handleSubmit}>
                    <CharacterHeader
                        character={this.props.character}
                        handleChange={this.handleChange}
                        races={this.props.races}
                        classes={this.props.classes}
                    />
                    <Button type='submit' icon='save' label='Save' raised primary disabled={disabled}/>
                    <Button icon='delete' label='Delete' raised accent onClick={this.toggleDialog}/>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        updateSelectedPlayerCharacter,
        patchPlayerCharacter,
        postPlayerCharacter,
        deletePlayerCharacter,
        fetchClasses,
        fetchRaces
    }
)(PlayerCharacterForm);